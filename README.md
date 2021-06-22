===== Router ==== 

https://reactrouter.com/web/guides/quick-start


==== Redux ====
https://react-redux.js.org/

https://es.redux.js.org/

-- Instalation

1 - npm install react-redux redux

2 - Create Reducer y types como acciones

3 - Create Store

4 - Add Provider at the entire app in JournalApp

4 - Configuring Redux DevTools -> https://github.com/zalmoxisus/redux-devtools-extension#usage


-- Custom Hook useForm

<!-- import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

} -->


5 - Creating the action

6 - https://console.firebase.google.com/ - console - create project - email & google

7 - npm install firebase

8 - Como las tareas para las peticiones a Google no son sincronas, se debe crear un Midleware
Para crear una accion asincrona -> https://www.npmjs.com/package/redux-thunk
npm install --save redux-thunk


9 - I had problems with firebase store npm i firebase@8.6.3 --save-exact


10 - Form Validators - https://www.npmjs.com/package/validator


11 - Implemento el loading en Redux, se usa el useSelector para obtener del state algun valor en
particular, en este caso necesitabamos el loading para deshabilitar o no el boton