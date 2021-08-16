import React from 'react'
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
export const activeNotes = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }


    
})
export const startLoadingNotes = ( uid ) => {
    return async(dispatch) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes(notes) );
        console.log(notes);
    }
}


export const setNotes = ( notes ) => ({
    type: types.setNotes,
    payload: notes
})


