import { UserActions } from '../actions'

export interface State {
    user: any | null;
}

export const initialState: State = {
    user: undefined
};

export function reducer(
    state: State = initialState,
    action: UserActions.UserActionsUnion
    ): State {
        switch (action.type) {
            case UserActions.UserActionTypes.LoadUser:
                return {
                    ...state,
                    user: action.payload.user
                }
            default:
                return state;
        }
        return state;
}

export const getUser = (state: State) => state.user;
