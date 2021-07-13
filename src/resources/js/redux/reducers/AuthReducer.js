import * as ActionTypes from "../actions/ActionTypes";

const initialState = {
    authResponse: "",
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.RESTART_AUTH_RESPONSE:
            return {
                ...state,
                authResponse: "",
            };
        case ActionTypes.LOADING:
            return {
                ...state,
                authResponse: "loading...",
            };
        case ActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                authResponse: action.response,
            };
        case ActionTypes.SIGNUP_ERROR:
            return {
                ...state,
                authResponse: action.response,
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                authResponse: "redirecting...",
            };
        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                authResponse: action.response,
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                authResponse: action.response,
            };
        case ActionTypes.LOGOUT_ERROR:
            return {
                ...state,
                authResponse: action.response,
            };
        case ActionTypes.CODE_ERROR:
            return {
                ...state,
                authResponse:
                    "There seems to be a problem, please refresh your browser",
            };
        default:
            return state;
    }
};

export default AuthReducer;
