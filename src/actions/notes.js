import { db } from '../firebase/firebase-config';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {

    return async( dispatch, getState ) => {

        console.log('entro')
        
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add( newNote )

        dispatch(activeNotes( doc.id, newNote ));
    }

    
}
export const activeNotes = (id, notes) => ({
    type: types.noteActive,
    payload: {
        id,
        ...notes
    }


    
})
export const startLoadingNotes = ( uid ) => {
    return async(dispatch) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes(notes) );
    }
}


export const setNotes = ( notes ) => ({
    type: types.setNotes,
    payload: notes
})

