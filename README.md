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