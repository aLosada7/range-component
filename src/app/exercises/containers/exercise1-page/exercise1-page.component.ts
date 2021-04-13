import { Component, OnInit, OnDestroy } from '@angular/core';

import { IRange } from '../../models/range.model';
import { Subscription } from 'rxjs';
import { Bullet } from '../../models/bullet.model';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'ngc-exercise1-page',
  templateUrl: './exercise1-page.component.html',
  styleUrls: ['./exercise1-page.component.scss']
})
export class Exercise1PageComponent implements OnInit, OnDestroy {

    rangeValues: IRange;
    defaultMinMaxRangeValues: IRange;

    loadDataSubscription: Subscription;

    constructor(private mockService: MockService) { }

    ngOnInit(): void {
        this.loadInitialData();
    }

    private loadInitialData() {
        this.loadDataSubscription = this.mockService.getRandomRangeValues().subscribe(rangeValues => {
            this.rangeValues = rangeValues;
            this.defaultMinMaxRangeValues = this.rangeValues;
        })
    }

    onRangeChange(options) {
        if (options.bullet === Bullet.Left) {
            this.rangeValues = {
                ...this.rangeValues,
                min: options.move ? +this.rangeValues['min'] + (options.move > 0 ? 1 : (-1)) : +options.newValue
            }
        } else {
            this.rangeValues = {
                ...this.rangeValues,
                max: options.move ? +this.rangeValues['max'] + (options.move > 0 ? 1 : (-1)) : +options.newValue
            }
        }
    }

    ngOnDestroy() {
        if (this.loadDataSubscription) this.loadDataSubscription.unsubscribe();
    }

}
