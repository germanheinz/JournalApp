import React from 'react'
import { useDispatch } from 'react-redux';
import { logout, startLogOut } from '../actions/authAction';

export const JournalScreen = () => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        console.log("log out");
        dispatch(startLogOut());
    }

    return (
        <div>
            <h2>Journal Screen</h2>
            <button onClick={ handleLogOut }>Log Out</button>
        </div>
    )
}
