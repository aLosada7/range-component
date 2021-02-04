import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';


import { SharedModule } from 'src/app/shared/shared.module';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    const { initialState } = fromAuthReducer;

    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
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
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('valid form', () => {
        component.loginForm.controls['email'].setValue("alos@gmail.com");
        component.loginForm.controls['password'].setValue("");
        expect(component.loginForm.valid).toBeFalsy();
        component.loginForm.controls['password'].setValue("A123alvaro");
        expect(component.loginForm.valid).toBeTruthy();
    });

    it('method launched when form submitted', () => {
        jest.spyOn(component, 'login')
        fixture.debugElement.query(By.css('#login-form')).triggerEventHandler('submit', null);

        expect(component.login).toHaveBeenCalled()
    });
});
