import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authAction';

export const JournalScreen = () => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        console.log("log out");
        dispatch(logout());
    }

    return (
        <div>
            <h2>Journal Screen</h2>
            <button onClick={ handleLogOut }>Log Out</button>
        </div>
    )
}
