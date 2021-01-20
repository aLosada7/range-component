import { Action } from '@ngrx/store';

export enum AuthPageActionTypes {
  SignUp = '[Auth Page] Start Sign Up',
}

export class SignUp implements Action {
  type = AuthPageActionTypes.SignUp;

  constructor(public payload: any) {}
}

export type AuthPageActionsUnion =
SignUp
