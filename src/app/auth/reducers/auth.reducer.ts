import { AuthPageActions, AuthApiActions } from '../actions';

export interface State {
  loading: boolean
  error: string
}

export const initialState: State = {
  loading: false,
  error: null
};

export function reducer(
  state = initialState,
  action: AuthPageActions.AuthPageActionsUnion | AuthApiActions.AuthApiActionsUnion
): State {
    switch (action.type) {
        case AuthPageActions.AuthPageActionTypes.SignUp:
        case AuthPageActions.AuthPageActionTypes.Login:
        case AuthPageActions.AuthPageActionTypes.RecoverPassword: {
        return {
            ...state,
            loading: true,
        };
        }

        case AuthApiActions.AuthApiActionTypes.SignUpSuccess:
        case AuthApiActions.AuthApiActionTypes.LoginSuccess:
        case AuthApiActions.AuthApiActionTypes.RecoverPasswordSuccess: {
        return {
            ...state,
            loading: false,
        };
        }

        case AuthApiActions.AuthApiActionTypes.SignUpFailure:
        case AuthApiActions.AuthApiActionTypes.LoginFailure:
        case AuthApiActions.AuthApiActionTypes.RecoverPasswordFailure:  {
        return {
            ...state,
            loading: false,
            error: "There is an error"
        };
        }

        default: {
        return state;
        }
    }
}

export const getAuthError = (state: State) => state.error;
