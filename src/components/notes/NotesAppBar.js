import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch   = useDispatch();
    const { active } = useSelector( state => state.notes );
    console.log(active);
    
    const save = () => {
        console.log( active );
        dispatch( startSaveNote( active ));
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button className="btn" onClick={ save }>
                    Save
                </button>
            </div>
        </div>
    )
}
