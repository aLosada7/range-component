import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { emailValidator } from '../../../shared/validators/email.validator';
import { AuthPageActions } from '../../actions';
import * as fromAuth from '../../reducers';

@Component({
  selector: 'tms-password-reset-page',
  templateUrl: './password-reset-page.component.html'
})
export class PasswordResetPageComponent implements OnInit {

    passwordResetForm: FormGroup;

    constructor(private store: Store<fromAuth.State>,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.passwordResetForm = this.fb.group(
            {
                email: ['', [Validators.required, emailValidator]],
            }
        );
    }

    passwordReset() {
        if (this.passwordResetForm.valid) {
            const user = {
                email: this.passwordResetForm.get("email").value
            }
            this.store.dispatch(new AuthPageActions.RecoverPassword(user));
        }
    }

}
