import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';

import { useForm } from '../../hooks/useForm';
import { activeNotes } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );

    const [values, handleInputChange, reset ] = useForm( note );

    const { body, title } = values;

    const activeId = useRef( note.id );

    useEffect(() => {

      if( note.id !== activeId.current ){

        reset( note );
        activeId.current = note.id

      }
    }, [ note, reset ])

    useEffect(() => {

        dispatch( activeNotes(values.id, { ...values }) );

        console.log(values);
        
    }, [ values ]);

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
                    name="body"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={ title }
                    onChange={ handleInputChange }
                    name="title"
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
