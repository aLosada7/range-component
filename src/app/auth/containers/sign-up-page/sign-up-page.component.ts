import { MyErrorStateMatcher } from './../../../shared/validators/error-state-matcher';
import { SharedService } from './../../../shared/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { emailValidator } from '../../../shared/validators/email.validator';
import { passwordValidator } from '../../../shared/validators/password.validator';
import { matchPasswordValidator } from '../../../shared/validators/match-passwords.validator';

@Component({
  selector: 'lwa-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        email: ['', [Validators.required, emailValidator]],
        password: ['', [Validators.required, passwordValidator]],
        repeatedPassword: ['', [Validators.required]],
      },
      { validator: matchPasswordValidator }
    );
  }

  matcher = new MyErrorStateMatcher();

  signUp() {}
}
