import { Component, OnInit, OnDestroy } from '@angular/core';
import { range, Subscription } from 'rxjs';
import { Bullet } from '../../models/bullet.model';
import { IRange } from '../../models/range.model';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'ngc-exercise2-page',
  templateUrl: './exercise2-page.component.html',
  styleUrls: ['./exercise2-page.component.scss']
})
export class Exercise2PageComponent implements OnInit, OnDestroy {

    rangeValues: IRange;
    values: number[];
    min: number;
    max: number;

    loadDataSubscription: Subscription;

    constructor(private masterService: MasterService) { }

    ngOnInit(): void {
        this.loadDataSubscription = this.masterService.getFixedRangeValues().subscribe(values => {
            this.values = values;

            this.min = values[0];
            this.max = values[values.length - 1];

            this.rangeValues = {
                min: this.min,
                max: this.max
            }
        })
    }

    onRangeChange(event) {
        if (event.bullet === Bullet.Left) {
            this.rangeValues = {
                ...this.rangeValues,
                min: event.move ? this.values[this.values.indexOf(this.rangeValues.min) + (event.move > 0 ? 1 : (-1))] : this.rangeValues.min //as the list is sorted
            }
        } else {
            this.rangeValues = {
                ...this.rangeValues,
                max: event.move ? this.values[this.values.indexOf(this.rangeValues.max) + (event.move > 0 ? 1 : (-1))] : this.rangeValues.max
            }
        }
    }

    ngOnDestroy() {
        if (this.loadDataSubscription) this.loadDataSubscription.unsubscribe();
    }

}
