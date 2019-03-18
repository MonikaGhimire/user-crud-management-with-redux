import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const fetchUsersSuccess = (users) => {
    return {
        type: ActionTypes.FETCH_USERS_SUCCESS,
        users: users
    };
};

export const fetchUsersFail = (errorMessage) => {
    return {
        type: ActionTypes.FETCH_USERS_FAIL,
        error: errorMessage
    };
};

export const fetchUsersStart = () => {
    return {
        type: ActionTypes.FETCH_USERS_START
    };
};

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersStart());
        axios.get('http://localhost:8000/users')
            .then(response => {
                const users = [];
                for (let index in response.data) {
                    users.push({
                        ...response.data[index]
                    })
                }
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFail(error));
            });
    }
}

export const addUserSuccess = () => {
    return {
        type: ActionTypes.ADD_USER_SUCCESS
    }
}

export const addUserFail = (errorMessage) => {
    return {
        type: ActionTypes.ADD_USER_FAIL,
        message: errorMessage
    }
}

export const addUserStart = () => {
    return {
        type: ActionTypes.ADD_USER_START
    }
}

export const addUser = (user, history) => {
    return dispatch => {
        dispatch(addUserStart());
        axios.post('http://localhost:8000/users', user)
            .then((response) => {
                dispatch(addUserSuccess());
                history.push("/");
            })
            .catch(error => {
                dispatch(addUserFail('An error occurred while adding user'));
            });
    };
};

export const updateUserSuccess = () => {
    return {
        type: ActionTypes.UPDATE_USER_SUCCESS
    }
}

export const updateUserFail = (errorMessage) => {
    return {
        type: ActionTypes.UPDATE_USER_FAIL,
        message: errorMessage
    }
}

export const updateUserStart = () => {
    return {
        type: ActionTypes.UPDATE_USER_START
    }
}

export const updateUser = (id, user, history) => {
    return dispatch => {
        dispatch(updateUserStart());
        axios.put('http://localhost:8000/users/' + id, user)
            .then((response) => {
                dispatch(updateUserSuccess());
                history.push("/");
            })
            .catch(error => {
                dispatch(updateUserFail('An error occured while updating user!'));
            });
    };
};

export const deleteUserSuccess = () => {
    return {
        type: ActionTypes.DELETE_USER_SUCCESS
    }
}

export const deleteUserFail = (errorMessage) => {
    return {
        type: ActionTypes.DELETE_USER_FAIL,
        message: errorMessage
    }
}

export const deleteUserStart = () => {
    return {
        type: ActionTypes.DELETE_USER_START
    }
}

export const deleteUser = (id, history) => {
    return dispatch => {
        dispatch(deleteUserStart());
        axios.delete(`http://localhost:8000/users/${id}`)
            .then((response) => {
                dispatch(deleteUserSuccess());
                history.push("/");
            }).catch(error => {
                dispatch(deleteUserFail('An error occured while deleting user!'));
            })
    };
};

export const showNotification = (message) => {
    return {
        type: ActionTypes.SET_NOTIFICATION,
        message: message
    }
}

export const hideNotification = () => {
    return {
        type: ActionTypes.HIDE_NOTIFICATION
    }
}