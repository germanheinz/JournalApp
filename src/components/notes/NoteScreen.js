import React from 'react'
import { useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';

import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {

    const { active:note } = useSelector( state => state.notes );
    console.log( note );

    const { values, handleInputChange } = useForm( note );
    console.log( values);
    const { body, title } = values;

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ body }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={ title }
                    onChange={ handleInputChange }
                ></textarea>
                {
                    (note.url)
                    &&
                    (
                        <div className="notes__image">
                            <img 
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                                alt="imagen"
                            />
                        </div>
                    )
                }


            </div>

        </div>
    )
}
