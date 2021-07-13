import * as ActionTypes from "./ActionTypes";
import {
    RegisterUserService,
    LoginUserService,
    LogOutUserService,
} from "../../services/AuthService";


export const RegisterAction = (credentials) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        RegisterUserService(credentials).then(
            (response) => {
                if (response.hasOwnProperty("success") && response.success === true) {
                    dispatch({ type: ActionTypes.SIGNUP_SUCCESS, response });
                } else if (
                    response.hasOwnProperty("success") &&
                    response.success === false
                ) {
                    dispatch({ type: ActionTypes.SIGNUP_ERROR, response });
                }
            },
            (error) => {
                dispatch({ type: ActionTypes.CODE_ERROR, error });
            }
        );
    };
};
export const LoginAction = (credentials, history) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        LoginUserService(credentials).then(
            (response) => {
                if (response.hasOwnProperty("success") && response.success === true) {
                    localStorage.setItem("user-token", response.token);
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS });
                    history.push("/user");
                } else if (
                    response.hasOwnProperty("success") &&
                    response.success === false
                ) {
                    dispatch({ type: ActionTypes.LOGIN_ERROR, response });
                }
            },
            (error) => {
                dispatch({ type: ActionTypes.CODE_ERROR, error });
            }
        );
    };
};
export const LogoutAction = () => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        LogOutUserService().then(
            (response) => {
                if (response.hasOwnProperty("success") && response.success === true) {
                    dispatch({ type: ActionTypes.LOGOUT_SUCCESS, response });
                } else if (
                    response.hasOwnProperty("success") &&
                    response.success === false
                ) {
                    dispatch({ type: ActionTypes.LOGOUT_SUCCESS, response });
                }
            },
            (error) => {
                dispatch({ type: ActionTypes.CODE_ERROR, error });
            }
        );
    };
};
