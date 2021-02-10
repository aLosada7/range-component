import { PasswordCreatePageComponent } from './containers/password-create-page/password-create-page.component';
import { EmailVerificationPageComponent } from './containers/email-verification-page/email-verification-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './containers/login-page/login-page.component';
import { PasswordResetPageComponent } from './containers/password-reset-page/password-reset-page.component';
import { SignUpPageComponent } from './containers/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'password/reset', component: PasswordResetPageComponent },
  { path: 'password/create', component: PasswordCreatePageComponent },
  { path: 'email-verification', component: EmailVerificationPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
