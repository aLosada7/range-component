import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, noop, Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IRange } from '../../models/range.model';
import { Bullet } from '../../models/bullet.model';

@Component({
  selector: 'ngc-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RangeComponent),
    multi: true
  }]
})
export class RangeComponent implements OnInit, ControlValueAccessor {

    @ViewChild('leftBullet', { static: false }) leftBullet: ElementRef;
    @ViewChild('rightBullet', { static: false }) rightBullet: ElementRef;

    @Input() min;
    @Input() max;
    @Input() fixed;
    @Input() values;

    @Output() rangeChange = new EventEmitter();
    mobileDebouncer: Subject<any> = new Subject<any>();

    LINE_WIDTH: number;
    LINE_WIDTH_LARGE: number = 150;
    LINE_WIDTH_MOBILE: number = 100;

    rangeValues: IRange;
    pointSelected: number;
    isMobile: boolean;

    leftPointerMouseDownSubscription: Subscription;
    leftPointerClickMouseUpSubscription: Subscription;
    leftPointerMoveSubscription: Subscription;
    rightPointerClickMouseUpSubscription: Subscription;
    rightPointerMouseDownSubscription: Subscription;
    rightPointerMoveSubscription: Subscription;

    constructor() {
        // range values initialization
        this.rangeValues = {
            min: 0,
            max: 0
        }

        this.mobileDebouncer
            .pipe(debounceTime(10))
            .subscribe((options) => {
                this.rangeChange.emit({
                    bullet: options.bullet,
                    move: options.move
                });
            });
    }

    ngOnInit(): void {

        this.detectScreenSize();

    }

    @HostListener("window:resize", [])
    private onResize() {
        this.detectScreenSize();
    }

    detectScreenSize() {
        this.isMobile = window.innerWidth < 480;
        this.LINE_WIDTH = this.isMobile ? this.LINE_WIDTH_MOBILE : this.LINE_WIDTH_LARGE ;
    }

    writeValue(rangeValues: IRange) {
        this.rangeValues = rangeValues;
    }

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    ngAfterViewInit() {
        // another way to do it is using directly the mouse events
        this.leftPointerMouseDownSubscription = fromEvent(this.leftBullet.nativeElement, 'mousedown')
        .subscribe((e: any) => {
            this.pointSelected = Math.round(e['screenX']);
        });

        this.leftPointerClickMouseUpSubscription = fromEvent(document, 'mouseup')
        .subscribe((e: any) => {
            this.pointSelected = null;
        });

        this.leftPointerMoveSubscription = fromEvent(this.leftBullet.nativeElement, 'mousemove')
        .subscribe((event: any) => {
            const move = this.getLeftBulletMove(event);
            this.makeMove(move);
        });

        this.rightPointerMouseDownSubscription = fromEvent(this.rightBullet.nativeElement, 'mousedown')
        .subscribe((e: any) => {
            this.pointSelected = Math.round(e['screenX']);
        });

        this.rightPointerClickMouseUpSubscription = fromEvent(document, 'mouseup')
        .subscribe((e: any) => {
            this.pointSelected = null;
        });

        this.rightPointerMoveSubscription = fromEvent(this.rightBullet.nativeElement, 'mousemove')
        .subscribe((event: any) => {
            const move = this.getRightBulletMove(event);
            this.makeMove(move);
        });
    }

    getLeftBulletMove(event) {
        let move;

        if (this.pointSelected &&  event['screenX'] > this.pointSelected && this.rangeValues.min + 1 < this.rangeValues.max) {
            move = {
                bullet: Bullet.Left,
                move: 1 // asc
            }
            this.pointSelected = this.pointSelected + 1;
        } else if (this.pointSelected &&  event['screenX'] < this.pointSelected && this.rangeValues.min > this.min) {
            move = {
                bullet: Bullet.Left,
                move: -1 // desc
            }
            this.pointSelected = this.pointSelected - 1;
        }

        return move;
    }

    getRightBulletMove(event) {
        let move;

        if (this.pointSelected &&  event['screenX'] < this.pointSelected && this.rangeValues.max - 1 > this.rangeValues.min) {
            move = {
                bullet: Bullet.Right,
                move: -1 // desc
            }
            this.pointSelected = this.pointSelected - 1;
        } else if (this.pointSelected &&  event['screenX'] > this.pointSelected && this.rangeValues.max < this.max) {
            move = {
                bullet: Bullet.Right,
                move: 1 // asc
            }
            this.pointSelected = this.pointSelected + 1;
        }

        return move;
    }

    makeMove(move) {
        if (move) {
            this.rangeChange.emit(move)
        }
    }

    // update values introduced from input
    updateRangeValues(event: any, bullet: Bullet) {
        const newValue = event.target.value;
        if (this.isInputValueValid(bullet, newValue)) {
            this.makeMove({
                bullet: bullet,
                newValue: newValue
            });
        }
    }

    isInputValueValid(bullet: Bullet, newValue: number) {
        return (bullet === Bullet.Left) ? (newValue >= this.min && newValue < this.rangeValues.max) : (newValue <= this.max && newValue > this.rangeValues.min);
    }

    onPanBullet(event, move: number, bullet: Bullet) {
        if (this.isMoveValid(move, bullet) && this.isMobile) {
            this.mobileDebouncer.next({
                bullet: bullet,
                move: move
            });
        }
    }

    isMoveValid(move: number, bullet: Bullet) {
        return (bullet === Bullet.Left) ?
        !(move < 0 && this.rangeValues.min === this.min) && this.rangeValues.min + 1 < this.rangeValues.max :
        !(move > 0 && this.rangeValues.max === this.max) && this.rangeValues.max - 1 > this.rangeValues.min;
    }
}

