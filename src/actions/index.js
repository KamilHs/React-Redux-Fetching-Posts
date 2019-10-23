import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, FETCH_POSTS_STARTS } from '../constants';


export const fetchPostsBegin = () => {
    return {
        type: FETCH_POSTS_STARTS,
        payload: {
            status: "loading"
        }
    };
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: {
            posts,
            status: "success"
        }
    };
}

export const fetchPostsError = () => {
    return {
        type: FETCH_POSTS_ERROR,
        payload: {
            status: "error"
        }
    };
}

