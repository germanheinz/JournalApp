import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../hooks/useForm';



export const RegisterScreen = () => {

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

        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0 ){
            console.log("Name is required");
            return false;
        } else if (!validator.isEmail(email)){
            console.log("Email is not valid");
            return false;
        } else if ( password !== password2 || password.length < 5 ){
            console.log("Password is not valid");
            return false;
        }
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
