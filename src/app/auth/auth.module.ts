import { LoginPageComponent } from './containers/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpPageComponent } from './containers/sign-up-page/sign-up-page.component';

import { AuthEffects } from './effects/auth.effects';
import { UserDataComponent } from './components/user-data/user-data.component';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { PasswordResetPageComponent } from './containers/password-reset-page/password-reset-page.component';
import { EmailVerificationPageComponent } from './containers/email-verification-page/email-verification-page.component';
import { PasswordCreatePageComponent } from './containers/password-create-page/password-create-page.component';

@NgModule({
  declarations: [SignUpPageComponent, UserDataComponent, LoginPageComponent, PasswordResetPageComponent, EmailVerificationPageComponent, PasswordCreatePageComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
