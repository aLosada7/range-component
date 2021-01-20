import { SharedModule } from './../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { SignUpPageComponent } from './sign-up-page.component';
import { AuthPageActions, AuthApiActions  } from '../../actions'
import { AuthPageActionTypes } from '../../actions/auth-page.actions';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { AuthApiActionTypes } from '../../actions/auth-api.actions';

let component: SignUpPageComponent;
let fixture: ComponentFixture<SignUpPageComponent>;

describe('SignUpPageComponent', () => {
  let form: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPageComponent ],
      imports: [ SharedModule ],
      providers: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPageComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    //fixture.detectChanges();
    //form = fixture.debugElement.query(By.css("form"));
    //element = form.nativeElement;
  });

  it('valid email', () => {
    const email = "aldc30sc@gmail.com";
    component.signUpForm.controls['email'].setValue(email);
    expect(component.signUpForm.controls['email'].errors?.password).toBeUndefined();
  })

  it('not valid email', () => {
    const email = "aldc30sc";
    component.signUpForm.controls['email'].setValue(email);
    expect(component.signUpForm.controls['email'].errors?.email).toBe("aldc30sc");
  })

  // password requirements: 8 characters, 1 capital letter, 1 uppercase letter, 1 number
  it('password valid', () => {
    const password = "A123hello";
    component.signUpForm.controls['password'].setValue(password);
    expect(component.signUpForm.controls['password'].errors?.password).toBeUndefined();
  })

  it('password valid with different path', () => {
    const password = "123Hello";
    component.signUpForm.controls['password'].setValue(password);
    expect(component.signUpForm.controls['password'].errors?.password).toBeUndefined();
  })

  it('not valid password', () => {
    const password = "a123hello";
    component.signUpForm.controls['password'].setValue(password);
    expect(component.signUpForm.controls['password'].errors?.password).not.toBeUndefined();
  });

  it('valid form', () => {

  })

  it('not valid form', () => {

  })
});

describe('Sign up actions', () => {

  it('launch sign up action', () => {
    const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" }
    const action = new AuthPageActions.SignUp(payload);

    expect(action.type).toEqual(AuthPageActionTypes.SignUp);
    expect({...action}).toEqual({
      type: AuthPageActionTypes.SignUp,
      payload
    })
  });

  it('success sign up action', () => {
    const action = new AuthApiActions.SignUpSuccess();

    expect({...action}).toEqual({
      type: AuthApiActionTypes.SignUpSuccess
    })
  });

  it('failure sign up action', () => {
    const error = "There's an error.";
    const action = new AuthApiActions.SignUpFailure(error);

    expect({...action}).toEqual({
      type: AuthApiActionTypes.SignUpFailure,
      payload: error
    })
  });
});

describe('Sign up reducer', () => {

  it('loading a true when sign up starts', () => {
    const { initialState } = fromAuthReducer;
    const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" };
    const action = new AuthPageActions.SignUp(payload);
    const state = fromAuthReducer.reducer(initialState, action);

    expect(state.loading).toBeTruthy();
  })

  it('loading a false when sign up ends and no error', () => {
    const { initialState } = fromAuthReducer;
    const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" };
    const action = new AuthApiActions.SignUpSuccess();
    const state = fromAuthReducer.reducer(initialState, action);

    expect(state.loading).toBeFalsy();
    expect(state.error).toBeNull();
  })

  it('loading a false when sign up ends and error', () => {
    const { initialState } = fromAuthReducer;
    const error = "There's an error.";
    const action = new AuthApiActions.SignUpFailure(error);
    const state = fromAuthReducer.reducer(initialState, action);

    expect(state.loading).toBeFalsy();
    expect(state.error).not.toBeNull();
  })
});
