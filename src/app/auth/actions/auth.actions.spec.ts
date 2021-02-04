import { AuthPageActions, AuthApiActions  } from '../actions'
import { AuthApiActionTypes } from './auth-api.actions';
import { AuthPageActionTypes } from './auth-page.actions';

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
