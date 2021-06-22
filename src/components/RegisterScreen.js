import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { registerWithEmailPassword } from '../actions/authAction';
import { removeError, setError } from '../actions/uiAction';
import { useForm } from '../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui);

    console.log(msgError);

    const [ formValues, handleInputChange ] = useForm({
        name: 'german@gmail.com',
        email: 'test@tes.com',
        password: '123456',
        password2: '123456'
    });
    
    const { name, email, password, password2 } = formValues;
    
    const handleRegister = (e) => {

        e.preventDefault();

        console.log(formValues);

        if(isFormValid()){
            dispatch(registerWithEmailPassword(email, password, name));
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0 ){
            dispatch( setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)){
            dispatch( setError('Email is not valid') );
            return false;
        } else if ( password !== password2 || password.length < 5 ){
            dispatch( setError('Password is not valid') );
            return false;
        }
        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value= { name }
                    onChange= { handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value= { email }
                    onChange= { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value= { password }
                    onChange= { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value= { password2 }
                    onChange= { handleInputChange }
                />
                {
                    msgError && 
                    (
                        <p className="pError">
                            { msgError }
                        </p>

                    )
                }

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               
                <div className="link-button-register">
                    <Link 
                        to="/auth/login"
                        className="link"
                    >
                        Already registered?
                    </Link>

                </div>

            </form>
        </>
    )
}
