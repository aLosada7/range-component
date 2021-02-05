import { Action } from '@ngrx/store';

export enum AuthApiActionTypes {
  SignUpSuccess = '[Auth/API] Sign Up Success',
  SignUpFailure = '[Auth/API] Sign Up Failure',
  LoginSuccess = '[Auth/API] Login Success',
  LoginFailure = '[Auth/API] Login Failure',
  RecoverPasswordSuccess = '[Auth/API] Recover Password Success',
  RecoverPasswordFailure = '[Auth/API] Recover Password Failure',
}

export class SignUpSuccess implements Action {
  type = AuthApiActionTypes.SignUpSuccess;

  constructor() {}
}

export class SignUpFailure implements Action {
  type = AuthApiActionTypes.SignUpFailure;

  constructor(public payload: string) {}
}

export class LoginSuccess implements Action {
    type = AuthApiActionTypes.LoginSuccess;

    constructor() {}
  }

export class LoginFailure implements Action {
type = AuthApiActionTypes.LoginFailure;

constructor(public payload: string) {}
}

export class RecoverPasswordSuccess implements Action {
    type = AuthApiActionTypes.RecoverPasswordSuccess;

    constructor() {}
  }

export class RecoverPasswordFailure implements Action {
type = AuthApiActionTypes.RecoverPasswordFailure;

constructor(public payload: string) {}
}

export type AuthApiActionsUnion =
SignUpSuccess |
SignUpFailure |
LoginSuccess |
LoginFailure |
RecoverPasswordSuccess |
RecoverPasswordFailure
