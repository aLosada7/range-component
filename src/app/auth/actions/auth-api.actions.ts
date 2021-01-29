import { Action } from '@ngrx/store';

export enum AuthApiActionTypes {
  SignUpSuccess = '[Auth/API] Sign Up Success',
  SignUpFailure = '[Auth/API] Sign Up Failure',
}

export class SignUpSuccess implements Action {
  type = AuthApiActionTypes.SignUpSuccess;

  constructor() {}
}

export class SignUpFailure implements Action {
  type = AuthApiActionTypes.SignUpFailure;

  constructor(public payload: string) {
      console.log(payload);
  }
}

export type AuthApiActionsUnion =
SignUpSuccess |
SignUpFailure
