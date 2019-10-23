import { combineReducers } from 'redux';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_STARTS, FETCH_POSTS_ERROR } from "../constants"


function FetchingPosts(state = [], action) {    
    switch (action.type) {
        case FETCH_POSTS_STARTS:
            return Object.assign({}, state, action.payload);
        case FETCH_POSTS_SUCCESS:
            return Object.assign({}, state, action.payload);
        case FETCH_POSTS_ERROR:
            return Object.assign({}, state, action.payload);
        default:
            return state;

    }
}



export default combineReducers({ FetchingPosts });

