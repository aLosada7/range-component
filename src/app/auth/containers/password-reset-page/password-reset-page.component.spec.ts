import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';


import { SharedModule } from 'src/app/shared/shared.module';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { PasswordResetPageComponent } from './password-reset-page.component';

describe('PasswordResetPageComponent', () => {
  let component: PasswordResetPageComponent;
    let fixture: ComponentFixture<PasswordResetPageComponent>;

    beforeEach(async(() => {
        const { initialState } = fromAuthReducer;

        TestBed.configureTestingModule({
        declarations: [ PasswordResetPageComponent ],
        imports: [ SharedModule ],
        providers: [
            FormsModule,
            BrowserModule,
            ReactiveFormsModule,
            provideMockStore({ initialState }),
            { provide: ComponentFixtureAutoDetect, useValue: true }
        ],
        schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordResetPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('valid form', () => {
        component.passwordResetForm.controls['email'].setValue("hey");
        expect(component.passwordResetForm.valid).toBeFalsy();
        component.passwordResetForm.controls['email'].setValue("aldc30sc@gmail.com");
        expect(component.passwordResetForm.valid).toBeTruthy();
    });

    it('method launched when form submitted', () => {
        jest.spyOn(component, 'passwordReset')
        fixture.debugElement.query(By.css('#reset-form')).triggerEventHandler('submit', null);

        expect(component.passwordReset).toHaveBeenCalled()
    });
});
