import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RangeComponent } from '../../components/range/range.component';
import { Bullet } from '../../models/bullet.model';

import { Exercise1PageComponent } from './exercise1-page.component';

describe('Exercise 1', () => {
    let component: Exercise1PageComponent;
    let fixture: ComponentFixture<Exercise1PageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpClientModule],
            declarations: [ Exercise1PageComponent, RangeComponent ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Exercise1PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.defaultMinMaxRangeValues = {
            min: 0,
            max: 100
        }

        component.rangeValues = {
            min: 0,
            max: 100
        }
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('range change tests', () => {
        it('increase price to left bullet', () => {
            const oldRangeValues = component.rangeValues;
            const options = {
                bullet: Bullet.Left,
                move: 1
            }

            component.onRangeChange(options);

            expect(component.rangeValues.min).toBe(oldRangeValues.min + 1)
        })

        it('decrease price to right bullet', () => {
            const oldRangeValues = component.rangeValues;
            const options = {
                bullet: Bullet.Right,
                move: -1
            }

            component.onRangeChange(options);

            expect(component.rangeValues.max).toBe(oldRangeValues.max - 1)
        })
    })
});
