import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { SignUpPageComponent } from './containers/sign-up-page/sign-up-page.component';

import { AuthEffects } from './effects/auth.effects';
import { UserDataComponent } from './components/user-data/user-data.component';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AuthPageComponent, SignUpPageComponent, UserDataComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
