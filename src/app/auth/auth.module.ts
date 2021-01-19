import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { SignUpPageComponent } from './containers/sign-up-page/sign-up-page.component';


@NgModule({
  declarations: [AuthPageComponent, SignUpPageComponent],
  imports: [
    SharedModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
