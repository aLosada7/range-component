import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RangeComponent } from '../../components/range/range.component';
import { Bullet } from '../../models/bullet.model';

import { Exercise2PageComponent } from './exercise2-page.component';

describe('Exercise 2', () => {
    let component: Exercise2PageComponent;
    let fixture: ComponentFixture<Exercise2PageComponent>;
    const mockedFixedValues = [1, 5, 9, 15, 19];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpClientModule],
            declarations: [ Exercise2PageComponent, RangeComponent ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Exercise2PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.values = mockedFixedValues

        component.rangeValues = {
            min: mockedFixedValues[0],
            max: mockedFixedValues[mockedFixedValues.length - 1]
        }
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('range change tests', () => {
        it('increase price to left bullet', () => {
            const options = {
                bullet: Bullet.Left,
                move: 1
            }

            component.onRangeChange(options);

            expect(component.rangeValues.min).toBe(mockedFixedValues[1])
        })

        it('decrease price to right bullet', () => {
            const options = {
                bullet: Bullet.Right,
                move: -1
            }

            component.onRangeChange(options);

            expect(component.rangeValues.max).toBe(mockedFixedValues[mockedFixedValues.length - 2])
        })
    })
});
