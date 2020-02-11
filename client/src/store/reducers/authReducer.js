import { SET_USER, SET_LOADING, LOGOUT } from '../actions/actionTypes';

const initialState = {
    user: null,
    isUserLoggedIn: false,
    loadingUser: true
}

const authReducer = (state = initialState, {type, payload}) => {
    const newState = { ...state }

    switch (type) {
        case SET_USER:
            newState.user = payload
            newState.isUserLoggedIn = true
            newState.loadingUser = false
            break;
        case SET_LOADING:
            newState.loadingUser = !newState.loadingUser
            break;
        case LOGOUT:
            newState.user = null
            newState.isUserLoggedIn = false
        default:
            break;
    }

    return newState;
}

export default authReducer;