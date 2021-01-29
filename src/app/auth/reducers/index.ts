import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromAuth from './auth.reducer';


export interface AuthState {
    signUpPage: fromAuth.State
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<
  AuthState,
  any
> = {
    signUpPage: fromAuth.reducer
};

export const getAuthState = createFeatureSelector<State, AuthState>('auth');

export const getAuthEntitiesState = createSelector(
    getAuthState,
    (state: AuthState) => state.signUpPage
);

export const getSignUpPageError = createSelector(
    getAuthEntitiesState,
    fromAuth.getAuthError
);
