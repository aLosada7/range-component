import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromAuth from './auth.reducer';
export interface AuthState {
    auth: fromAuth.State,
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<
  AuthState,
  any
> = {
    auth: fromAuth.reducer
};

export const getAuthState = createFeatureSelector<State, AuthState>('auth');

export const getAuthEntitiesState = createSelector(
    getAuthState,
    (state: AuthState) => state.auth
);

export const getSignUpPageError = createSelector(
    getAuthEntitiesState,
    fromAuth.getAuthError
);
