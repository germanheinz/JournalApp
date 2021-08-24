import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDelete, startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch   = useDispatch();
    const { notes:active } = useSelector( state => state.notes );
    const { active:note } = useSelector( state => state.notes );

    console.log(note.id);
    
    const save = () => {
        console.log( active );
        dispatch( startSaveNote( active ));
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        console.log(e);
        const file = e.target.files[0];

        if ( file ){
            dispatch(startUploading(file));
        }
    }
    const handleDeleteClick = () => {
        // console.log(note.id);
        dispatch( startDelete(note.id));
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <input
            id="fileSelector"
            type="file"
            style={{ display: 'none' }}
            onChange={ handleFileChange }
            />

            <div>

                <button className="btn" onClick={ handleDeleteClick }>
                    Delete
                </button>
                <button className="btn" onClick={ handlePictureClick }>
                    Picture
                </button>

                <button className="btn" onClick={ save }>
                    Save
                </button>
            </div>
        </div>
    )
}
