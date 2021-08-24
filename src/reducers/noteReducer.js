import { types } from "../types/types"

const initialState = {
    notes:[],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    
    //siempre se regresa el estado anterior
    switch (action.type) {

        case types.noteActive:
            return{
                ...state,
                active: { 
                    ...action.payload 
                }
            }
        case types.setNotes:
            return{
                ...state,
                notes: [ ...action.payload ]
            }

        case types.noteUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                    ? action.payload.note
                    : note
                )
            }
        case types.noteDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload )
            }

    default:
        return state
    }
}
