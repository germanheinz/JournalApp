import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen';
import { RegisterScreen } from '../components/RegisterScreen';

export const AppRouter = () => {
    return (
    <Router>
        <div>
            <Switch>
                <Route path="/login" component={ LoginScreen } />
                <Route path="/register" component={ RegisterScreen } />
            </Switch>
        </div>
    </Router>
    )
}
