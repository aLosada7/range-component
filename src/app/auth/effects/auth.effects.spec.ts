import { asyncScheduler, Observable, ReplaySubject } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

import { AuthEffects } from './auth.effects';
import { AuthService } from './../services/auth.service';
import { AuthPageActionTypes } from '../actions/auth-page.actions';
import { AuthPageActions } from '../actions';

const authService = {
    signUp: jest.fn()
}

describe('Auth actions', () => {

    let actions$;
    let authEffects;

    beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
                AuthEffects,
                provideMockActions(() => actions$),
                { provide: AuthService, useValue: authService }
			]
		})

        authEffects = TestBed.inject(AuthEffects)
    });


    it('should return an SIGN_UP_SUCCESS action', async done => {
        const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" }

        authService.signUp.mockReturnValue(of({}));

        actions$ = new ReplaySubject(1);
        actions$.next(new AuthPageActions.SignUp(payload));

        authEffects.onSignUp$({
            debounce: 300,
            scheduler: asyncScheduler,
        }).subscribe(action => {
            expect(action).toEqual({
              type: '[Auth/API] Sign Up Success'
            });
            done();
        });
    });

});


