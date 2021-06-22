
import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { startLoadingAction, finishLoadingAction } from "./uiAction";


export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoadingAction());
        firebase.auth().signInWithEmailAndPassword(email, password)
                .then( ({ user }) => {
                    console.log(user);
                    dispatch(login(user.uid, user.name));
                    dispatch(finishLoadingAction());
                }).catch(e => {
                    console.log(e);
                    dispatch(finishLoadingAction());
                })

    }
}

export const registerWithEmailPassword = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(async ({ user }) => {
                    await user.updateProfile({displayName: name});
                    console.log(user);
                    dispatch(login(user.uid, user.displayName));
                }).catch(e => {
                    console.log(e);
                })
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