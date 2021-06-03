import { types } from "../types/types";



export const loginEmailPassword = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123456, 'test'));
        }, 2000);
    }
}

export const login = ( uid, displayName ) => {
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
    

}