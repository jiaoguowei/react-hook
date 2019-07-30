import { combineReducers } from 'redux'
import { ADD_TODO, RECEIVE_POSTS } from '../actions/actions'

function todos(state = [{text: 'start',completed: false} ], action:any):any {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
   
}

function listData(state = [], action: any): any {
    switch(action.type) {
        case RECEIVE_POSTS:
            return [
                ...state,
                {
                    listData: action.posts,
                    receivedAt: action.receivedAt
                }
            ]
            default:
                    return state
    }
}

const todoApp = combineReducers({
    todos,
    listData
})
export default todoApp