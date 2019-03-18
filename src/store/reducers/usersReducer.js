import * as ActionTypes from '../actions/ActionTypes';
import { updateObject } from '../utility';

const initialState = {
    users: [],
    loading: false,
    notification: {
        messages: [],
        display: false
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USERS_START:
            return updateObject(state, {loading: true});

        case ActionTypes.FETCH_USERS_SUCCESS:
            return updateObject(state, {
                users: action.users,
                loading: false
            });

        case ActionTypes.FETCH_USERS_FAIL:
            return updateObject(state, { loading: false });

        case ActionTypes.ADD_USER_START:
            return updateObject(state, {loading: true});

        case ActionTypes.ADD_USER_SUCCESS:
            return updateObject(state, {
                loading: false,
                notification: {
                    messages: [state.notification.messages],
                    display: false
                }
            });

        case ActionTypes.ADD_USER_FAIL:
            return updateObject(state, {
                loading: false,
                notification: {
                    messages: [...state.notification.messages, action.message],
                    display: true
                }
            });

        case ActionTypes.UPDATE_USER_START:
            return updateObject(state, {loading: true});

        case ActionTypes.UPDATE_USER_SUCCESS:
        return updateObject(state, {
            loading: false,
            notification: {
                messages: [state.notification.messages],
                display: false
            }
        });

        case ActionTypes.UPDATE_USER_FAIL:
            return updateObject(state, {
                loading: false,
                notification: {
                messages: [...state.notification.messages, action.message],
                display: true
                }
            });

        case ActionTypes.DELETE_USER_START:
            return updateObject(state, {loading: true});

        case ActionTypes.DELETE_USER_SUCCESS:
        return updateObject(state, {
            loading: false,
            notification: {
                messages: [state.notification.messages],
                display: false
            }
        });

        case ActionTypes.DELETE_USER_FAIL:
        return updateObject(state, {
            loading: false,
            notification: {
            messages: [...state.notification.messages, action.message],
            display: true
            }
        });

        case ActionTypes.SET_NOTIFICATION:
            return updateObject(state, {
                messages: [...state.notification.messages, action.message],
                display: true
            })

        case ActionTypes.HIDE_NOTIFICATION:
            return updateObject(state, {
                notification: {
                    messages: [state.notification.messages],
                    display: false
                }
            })

        default: return state;
    }
};

export default reducer;