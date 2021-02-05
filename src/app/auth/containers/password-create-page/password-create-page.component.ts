import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { matchPasswordValidator } from 'src/app/shared/validators/match-passwords.validator';
import * as fromAuth from '../../reducers';

@Component({
  selector: 'app-password-create-page',
  templateUrl: './password-create-page.component.html'
})
export class PasswordCreatePageComponent implements OnInit {

    createPasswordForm: FormGroup;

    constructor(private store: Store<fromAuth.State>,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.createPasswordForm = this.fb.group(
            {
                password: ['', [Validators.required]],
                repeatedPassword: ['', [Validators.required]],
            },
            { validator: matchPasswordValidator }
        );
    }

    createPassword() {
        /*if (this.createPasswordForm.valid) {
            const user = {
                password: this.signUpForm.get("password").value,
                repeatedPassword: this.signUpForm.get("repeatedPassword").value
            }
            this.store.dispatch(new AuthPageActions.SignUp(user));
        }*/
    }

}
