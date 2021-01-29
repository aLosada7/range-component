import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { StoreModule } from '@ngrx/store';

import { SignUpPageComponent } from './sign-up-page.component';
import { AuthPageActions, AuthApiActions  } from '../../actions'
import { AuthPageActionTypes } from '../../actions/auth-page.actions';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { AuthApiActionTypes } from '../../actions/auth-api.actions';
import { AuthEffects } from './../../effects/auth.effects';
import { AuthService } from './../../services/auth.service';
import { SharedModule } from './../../../shared/shared.module';
import * as fromAuth from '../../reducers/auth.reducer';
import { getAuthEntitiesState, getSignUpPageError } from '../../reducers';

let component: SignUpPageComponent;
let fixture: ComponentFixture<SignUpPageComponent>;

describe('SignUpPageComponent', () => {
    let h2: HTMLElement;
    const emailExistsError = "Email already exists.";

	beforeEach(async(() => {
        const { initialState } = fromAuthReducer;

		TestBed.configureTestingModule({
			declarations: [ SignUpPageComponent ],
			imports: [ SharedModule ],
			providers: [
				FormsModule,
				BrowserModule,
                ReactiveFormsModule,
                provideMockStore({ initialState,
                selectors: [
                    { selector: getSignUpPageError, value: emailExistsError}
                ] }),
                { provide: ComponentFixtureAutoDetect, useValue: true }
			],
			schemas: [NO_ERRORS_SCHEMA]
		})
        .compileComponents();

	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SignUpPageComponent);
        component = fixture.componentInstance;

        component.ngOnInit();

        h2= fixture.nativeElement.querySelector('h2');
		//fixture.detectChanges();
		//form = fixture.debugElement.query(By.css("form"));
		//element = form.nativeElement;
    });

    it('vertical spinner title', () => {
        const title = "STEP 1 OF 3";
		expect(h2.textContent).toContain(title);
	})

	it('valid email', () => {
		const email = "aldc30sc@gmail.com";
		component.signUpForm.controls['email'].setValue(email);
		expect(component.signUpForm.controls['email'].errors?.password).toBeUndefined();
	})

	it('not valid email', () => {
		const email = "aldc30sc";
		component.signUpForm.controls['email'].setValue(email);
		expect(component.signUpForm.controls['email'].errors?.email).toBe("aldc30sc");
	})

	// password requirements: 8 characters, 1 capital letter, 1 uppercase letter, 1 number
	it('password valid', () => {
		const password = "A123hello";
		component.signUpForm.controls['password'].setValue(password);
		expect(component.signUpForm.controls['password'].errors?.password).toBeUndefined();
	})

	it('password valid with different path', () => {
		const password = "123Hello";
		component.signUpForm.controls['password'].setValue(password);
		expect(component.signUpForm.controls['password'].errors?.password).toBeUndefined();
	})

	it('not valid password', () => {
		const password = "a123hello";
		component.signUpForm.controls['password'].setValue(password);
		expect(component.signUpForm.controls['password'].errors?.password).not.toBeUndefined();
    });

	it('valid form', () => {
        component.signUpForm.controls['plan'].setValue("free");
        component.signUpForm.controls['email'].setValue("alos@gmail.com")
        component.signUpForm.controls['password'].setValue("A123hello");
        component.signUpForm.controls['repeatedPassword'].setValue("A123hello");
        expect(component.signUpForm.valid).toBeTruthy();
    });

    it('component updates when sign up fails', () => {

        const errorElement = fixture.debugElement.query(By.css("#authError"));

        expect(errorElement.nativeElement.textContent).toEqual(emailExistsError);
    })
});

describe('Sign up actions', () => {

	it('launch sign up action', () => {

		const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" }
		const action = new AuthPageActions.SignUp(payload);

		expect(action.type).toEqual(AuthPageActionTypes.SignUp);
		expect({...action}).toEqual({
			type: AuthPageActionTypes.SignUp,
			payload
		})
	});

	it('success sign up action', () => {
		const action = new AuthApiActions.SignUpSuccess();

		expect({...action}).toEqual({
			type: AuthApiActionTypes.SignUpSuccess
		})
    });

    it('failure sign up action', () => {

		const error = "Email already exists.";
		const action = new AuthApiActions.SignUpFailure(error);

		expect({...action}).toEqual({
			type: AuthApiActionTypes.SignUpFailure,
			payload: error
        })

	});
});

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
