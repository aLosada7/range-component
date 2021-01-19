import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { SignUpPageComponent } from './containers/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'sign-up', component: SignUpPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
