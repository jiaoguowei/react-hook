
export const ADD_TODO = 'ADD_TODO'

export function addTodo(text:string) {
    return {type: ADD_TODO, text}
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit: any) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit: any, json: any) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json,
        receivedAt: Date.now()
    }
}

export function fetchPosts(subreddit: any): any {
    return function (dispatch: any): any {
        dispatch(requestPosts(subreddit))

        return fetch(`http://localhost:3001/posts/${subreddit}`)
        .then(response => response.json())
        .then(json => { 
            console.log('json数据-------', json)
            dispatch(receivePosts(subreddit, json))
        })
    }
}