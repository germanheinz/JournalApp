import { db } from '../firebase/firebase-config';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';
import Swal from 'sweetalert2';

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
});

export const startLoadingNotes = ( uid ) => {
    return async(dispatch) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes(notes) );
    }
}

export const setNotes = ( notes ) => ({
    type: types.setNotes,
    payload: notes
});

export const startSaveNote = ( note ) => {
    return async (dispatch, getState) => {
        
        const { uid } = getState().auth;

        if( !note.url ){
            delete note.url;
            delete note.noteDate;
        }

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFireStore );

        dispatch( refreshNote(note.id, noteToFireStore) );
        // Swal.fire('Saved!!', 'Note has been saved successfuly', 'success');
        
    }
}

// regresa un objeto
export const refreshNote = (id, note) => ({
   
    type: types.noteUpdated,
    payload: {
        id,
        note: {
            id, 
            ...note
        }
    }
    
});

