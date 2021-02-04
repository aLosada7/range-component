/*import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { StoreModule } from '@ngrx/store';*/

import { AuthPageActions, AuthApiActions  } from '../actions'
import * as fromAuthReducer from '../reducers/auth.reducer';


describe('Sign up reducer', () => {

	it('loading a true when sign up starts', () => {
		const { initialState } = fromAuthReducer;
		const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" };
		const action = new AuthPageActions.SignUp(payload);
		const state = fromAuthReducer.reducer(initialState, action);

		expect(state.loading).toBeTruthy();
	})

	it('loading a false when sign up ends and no error', () => {
		const { initialState } = fromAuthReducer;
		const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" };
		const action = new AuthApiActions.SignUpSuccess();
		const state = fromAuthReducer.reducer(initialState, action);

		expect(state.loading).toBeFalsy();
		expect(state.error).toBeNull();
	})

    it('loading a false when sign up ends and error', () => {
        const { initialState } = fromAuthReducer;
        const error = "Email already exists.";
        const action = new AuthApiActions.SignUpFailure(error);
        const state = fromAuthReducer.reducer(initialState, action);

        expect(state.loading).toBeFalsy();
        expect(state.error).not.toBeNull();
    });

});
/*class MockAuthService {
    signUp() {
        return of({ success: true});
    }
}

describe('Sign up effects', () => {
    let actions$: Observable<any>;
    let effects: AuthEffects;
    let store: MockStore<State>;
    let httpService: AuthService;

    beforeEach(() => {
        const { initialState } = fromAuthReducer;

        TestBed.configureTestingModule({
            providers: [
                AuthEffects,
                provideMockActions(() => actions$),
                provideMockStore( { initialState }),
                { provide: AuthService, useClass: MockAuthService }
            ]
        });

        effects = TestBed.inject(AuthEffects);
        store = TestBed.inject(MockStore);
        httpService = TestBed.inject(AuthService);
    })

    it('fire if action invoked', (done) => {
        const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" };

        const spy = spyOn(httpService, 'signUp').and.callThrough();
        actions$ = of(AuthPageActions.SignUp);

        effects.onSignUp$.subscribe((res) => {
            console.log(res);
            expect(res).toEqual(new AuthApiActions.SignUpSuccess());
            expect(spy).toHaveBeenCalledTimes(1);
            done()
        })
    })
})*/
