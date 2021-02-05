import { Action } from '@ngrx/store';

export enum AuthPageActionTypes {
    SignUp = '[Auth Page] Sign Up',
    Login = "[Auth Page] Login",
    RecoverPassword = "[Auth Page] Recover Password",
}

export class SignUp implements Action {
    type = AuthPageActionTypes.SignUp;

    constructor(public payload: any) {}
}

export class Login implements Action {
    type = AuthPageActionTypes.Login;

    constructor(public payload: any) {}
}

export class RecoverPassword implements Action {
    type = AuthPageActionTypes.RecoverPassword;

    constructor(public payload: any) {}
}

export type AuthPageActionsUnion =
SignUp |
Login |
RecoverPassword
