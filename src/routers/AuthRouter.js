import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen';
import { RegisterScreen } from '../components/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login" exact component={ LoginScreen } />
                <Route path="/auth/register" exact component={ RegisterScreen } />
                
                <Redirect to="/auth/login" />
            </Switch>
        </div>

    )
}