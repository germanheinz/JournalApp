import { types } from "../types/types";


// It's important that the state return something else than null, that's why it was 
// set as an empty object
export const authReducer = (state = {}, action) => {
    
    switch ( action.type ) {

        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}
    
        default:
            return state;
    }



}