import { combineReducers } from 'redux'

const CREATE_TODO = "CREATE_TODO" //action name
const GET_TODO = 'GET_TODO'

const users = (state = {}, actions) => {
    return state
}

const todos = (state=[], action) => { //reducer
    switch (action.type) {
        case CREATE_TODO:
            return [action.payload, ...state]
        case GET_TODO:
            return action.payload
        default: 
            return state
    }
}

export const reducer = combineReducers({todos, users})
 
