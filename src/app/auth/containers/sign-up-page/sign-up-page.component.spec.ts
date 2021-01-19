import { SharedModule } from './../../../shared/shared.module';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { SignUpPageComponent } from './sign-up-page.component';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;
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
  })
});
