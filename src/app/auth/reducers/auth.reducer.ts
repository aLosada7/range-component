import { SignUpSuccess, SignUpFailure } from './../actions/auth-api.actions';
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
    case AuthPageActions.AuthPageActionTypes.SignUp: {
      return {
        ...state,
        loading: true,
      };
    }

    case AuthApiActions.AuthApiActionTypes.SignUpSuccess: {
      return {
        ...state,
        loading: false,
      };
    }

    case AuthApiActions.AuthApiActionTypes.SignUpFailure: {
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
