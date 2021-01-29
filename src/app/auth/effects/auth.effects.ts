import { AuthService } from './../services/auth.service';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { asyncScheduler, Observable, of } from 'rxjs';
import { debounceTime, switchMap, map, catchError, tap } from "rxjs/operators";

import { AuthPageActions, AuthApiActions } from "../actions";


@Injectable()
export class AuthEffects {

    @Effect()
    onSignUp$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<
    Action
    > =>
    this.actions$.pipe(
      ofType<AuthPageActions.SignUp>(
        AuthPageActions.AuthPageActionTypes.SignUp
      ),
      debounceTime(debounce, scheduler),
      switchMap(action => {
        return this.authService.signUp(action.payload).pipe(
          map(res => new AuthApiActions.SignUpSuccess()),
          catchError(err => of(new AuthApiActions.SignUpFailure(err.error ? err.error : err)))
        );
      })
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}

}
