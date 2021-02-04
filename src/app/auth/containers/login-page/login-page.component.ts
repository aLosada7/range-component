import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { emailValidator } from '../../../shared/validators/email.validator';
import { passwordValidator } from '../../../shared/validators/password.validator';
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

    }

}
