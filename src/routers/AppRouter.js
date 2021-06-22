import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { JournalScreen } from '../components/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/authAction';

export const AppRouter = () => {


    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            console.log(user);
            
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setisLoggedIn(true);
            } else {
                setisLoggedIn(false);
            }

            setChecking(false);
        });
    }, [ dispatch, setChecking, setisLoggedIn ])

    if( checking ){
        return(
            <h2>Loading...</h2>
        )
    }

    return (
    <Router>
        <div>
            <Switch>
                <Route path="/auth" component={ AuthRouter } />
                <Route exact path="/" component={ JournalScreen } />
            </Switch>
        </div>
    </Router>
    )
}
