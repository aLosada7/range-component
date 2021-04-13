import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Bullet } from '../../models/bullet.model';

import { RangeComponent } from './range.component';

describe('RangeComponent', () => {
    let component: RangeComponent;
    let fixture: ComponentFixture<RangeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ RangeComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('move bullets', () => {

        beforeEach(() => {
            component.pointSelected = 100
            component.min = 1
            component.max = 100
            component.rangeValues = {
                min: 10,
                max: 90
            }
        });

        it('move left bullet to the right side', () => {
            const event = {
                screenX: 101
            }

            const expectedMove = {
                bullet: Bullet.Left,
                move: 1
            }

            expect(component.getLeftBulletMove(event)).toEqual(expectedMove)
        })

        it('move left bullet to the left side', () => {
            const event = {
                screenX: 99
            }

            const expectedMove = {
                bullet: Bullet.Left,
                move: -1
            }

            expect(component.getLeftBulletMove(event)).toEqual(expectedMove)
        })

        it('move left bullet to the left side when min is the same as actual rangeValue, not possible', () => {
            component.min = 1
            component.max = 100
            component.rangeValues = {
                min: 1,
                max: 100
            }
            const event = {
                screenX: 99
            }

            const expectedMove = {
                bullet: Bullet.Left,
                move: -1
            }

            expect(component.getLeftBulletMove(event)).toBeUndefined()
        })

        it('move right bullet to the left side', () => {
            const event = {
                screenX: 99
            }

            const expectedMove = {
                bullet: Bullet.Right,
                move: -1
            }

            expect(component.getRightBulletMove(event)).toEqual(expectedMove)
        })

        it('move right bullet to the right side', () => {
            const event = {
                screenX: 101
            }

            const expectedMove = {
                bullet: Bullet.Right,
                move: 1
            }

            expect(component.getRightBulletMove(event)).toEqual(expectedMove)
        })

        it('move right bullet to the right side when max is the same as actual rangeValue, not possible', () => {
            component.min = 1
            component.max = 100
            component.rangeValues = {
                min: 1,
                max: 100
            }
            const event = {
                screenX: 101
            }

            const expectedMove = {
                bullet: Bullet.Right,
                move: 1
            }

            expect(component.getRightBulletMove(event)).toBeUndefined()
        })

        // case test takes beforeEach values
        it('left change input value valid', () => {
            expect(component.isInputValueValid(Bullet.Left, 50)).toBeTruthy()
            expect(component.isInputValueValid(Bullet.Left, -10)).toBeFalsy()
        })

        it('right change input value valid', () => {
            expect(component.isInputValueValid(Bullet.Right, 50)).toBeTruthy()
            expect(component.isInputValueValid(Bullet.Right, 102)).toBeFalsy()
        })

        it('bullets do not cross', () => {
            component.rangeValues = {
                min: 1,
                max: 55
            }
            expect(component.isInputValueValid(Bullet.Left, 50)).toBeTruthy()
            expect(component.isInputValueValid(Bullet.Left, 60)).toBeFalsy()

            component.rangeValues = {
                min: 30,
                max: 55
            }
            expect(component.isInputValueValid(Bullet.Right, 30)).toBeFalsy()
        })
    })
});
