import { MyErrorStateMatcher } from './../../../shared/validators/error-state-matcher';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { emailValidator } from '../../../shared/validators/email.validator';
import { passwordValidator } from '../../../shared/validators/password.validator';
import { matchPasswordValidator } from '../../../shared/validators/match-passwords.validator';
import { AuthPageActions } from '../../actions';
import * as fromAuth from '../../reducers';
import { select } from '@ngrx/store';

@Component({
  selector: 'tms-sign-up-page',
  templateUrl: './sign-up-page.component.html'
})
export class SignUpPageComponent implements OnInit {

    signUpForm: FormGroup;

    steps: string[] = ["Choose your plan", "Your information", "Confirm your register"];
    actualStep: number = 1;

    authLoading$ = this.store.pipe(select(fromAuth.getLoading));
    error$ = this.store.pipe(select(fromAuth.getSignUpPageError));

    constructor(
        private store: Store<fromAuth.State>,
        private fb: FormBuilder) {}

    ngOnInit(): void {
        this.signUpForm = this.fb.group(
        {
            email: ['', [Validators.required, emailValidator]],
            name: ['', [Validators.required]],
            surnames: ['', [Validators.required]],
            password: ['', [Validators.required, passwordValidator]],
            repeatedPassword: ['', [Validators.required]],
        },
        { validator: matchPasswordValidator }
        );
    }

    matcher = new MyErrorStateMatcher();

    signUp() {
        if (this.signUpForm.valid) {
            const user = {
                email: this.signUpForm.get("email").value,
                password: this.signUpForm.get("password").value,
                name: this.signUpForm.get("name").value,
                lastName: this.signUpForm.get("surnames").value,
            }
            this.store.dispatch(new AuthPageActions.SignUp(user));
        }
    }
}
