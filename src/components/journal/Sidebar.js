import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogOut } from '../../actions/authAction';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogOut = () => {
        console.log("log out");
        dispatch(startLogOut());
    }
    const handleNewEntry = () => {
        dispatch( startNewNote() )
    }

    return (
        <aside className="journal__sidebar">
            <div>
                <p className="circulo"></p>
            </div>
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> { name } </span>
                </h3>
            </div>
            <button onClick={ handleLogOut }>Log Out</button>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5" onClick={ handleNewEntry }>
                    New entry
                </p>
            </div>
            <JournalEntries/>
        </aside>
    )
}
