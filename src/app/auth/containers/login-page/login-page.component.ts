import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { emailValidator } from '../../../shared/validators/email.validator';
import { AuthPageActions } from '../../actions';
import * as fromAuth from '../../reducers';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private store: Store<fromAuth.State>,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group(
            {
                email: ['', [Validators.required, emailValidator]],
                password: ['', [Validators.required]],
            }
        );
    }

    login() {
        if (this.loginForm.valid) {
            const user = {
                email: this.loginForm.get("email").value,
                password: this.loginForm.get("password").value
            }
            this.store.dispatch(new AuthPageActions.Login(user));
        }
    }

}
