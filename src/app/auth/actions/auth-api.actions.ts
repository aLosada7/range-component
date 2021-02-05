import { Action } from '@ngrx/store';

export enum AuthApiActionTypes {
  SignUpSuccess = '[Auth/API] Sign Up Success',
  SignUpFailure = '[Auth/API] Sign Up Failure',
  LoginSuccess = '[Auth/API] Login Success',
  LoginFailure = '[Auth/API] Login Failure',
  RecoverPasswordSuccess = '[Auth/API] Recover Password Success',
  RecoverPasswordFailure = '[Auth/API] Recover Password Failure',
  CreatePasswordSuccess = '[Auth/API] Create Password Success',
  CreatePasswordFailure = '[Auth/API] Create Password Failure',
}

export class SignUpSuccess implements Action {
    type = AuthApiActionTypes.SignUpSuccess;

    constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
    readonly type = AuthApiActionTypes.SignUpFailure;

    constructor(public payload: { error: any }) {}
}

export class LoginSuccess implements Action {
    type = AuthApiActionTypes.LoginSuccess;

    constructor(public payload: any) {}
  }

export class LoginFailure implements Action {
    readonly type = AuthApiActionTypes.LoginFailure;

    constructor(public payload: { error: any }) {}
}

export class RecoverPasswordSuccess implements Action {
    type = AuthApiActionTypes.RecoverPasswordSuccess;

    constructor(public payload: any) {}
  }

export class RecoverPasswordFailure implements Action {
    readonly type = AuthApiActionTypes.RecoverPasswordFailure;

    constructor(public payload: { error: any }) {}
}

export class CreatePasswordSuccess implements Action {
    type = AuthApiActionTypes.CreatePasswordSuccess;

    constructor(public payload: any) {}
  }

export class CreatePasswordFailure implements Action {
    readonly type = AuthApiActionTypes.CreatePasswordFailure;

    constructor(public payload: { error: any }) {}
}

export type AuthApiActionsUnion =
SignUpSuccess |
SignUpFailure |
LoginSuccess |
LoginFailure |
RecoverPasswordSuccess |
RecoverPasswordFailure |
CreatePasswordSuccess |
CreatePasswordFailure
