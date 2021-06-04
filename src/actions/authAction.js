
import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";


export const loginEmailPassword = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123456, 'test'));
        }, 2000);
    }
}

export const loginWithGoogle = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({ user }) => {
            console.log(user.uid + ' - ' + user.displayName)
            dispatch(login(user.uid, user.displayName));
        })
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