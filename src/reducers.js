import { combineReducers } from 'redux'

const ADD_POST = 'ADD_POST'

const fetchAPI = (state = [
    {name: 'demo'}, {name: 'hello'}
], action) => {
    switch (action.type) {
        case ADD_POSTS:
            return [action.payload, ...state]
        default:
            return state
    }
}

export const reducer = combineReducers({fetchAPI})

 
