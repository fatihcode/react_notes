import axios from 'axios';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USER = 'ADD_USER';
export const GET_USER_ERROR = 'GET_USER_ERROR';


export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

// export function getUser() {
//     return dispatch => {
//         axios.get('https://jsonplaceholder.typicode.com/users/2')
//             .then(res => res.data)
//             .then(resData => dispatch(updateUser(resData.name)))
//             .catch(err=>dispatch(showError(err.message)))
//     }

// }

export function getUser() {
    return async dispatch => {

        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users/2')
            dispatch(updateUser(result.data.name))

        } catch (error) {
            dispatch(showError(error.message))
        }
    }
}


export function showError(err) {
    return {
        type: GET_USER_ERROR,
        payload: {
            error: err
        }
    }
}

export function addUser(newUser) {
    return {
        type: ADD_USER,
        payload: {
            user: newUser
        }
    }
}