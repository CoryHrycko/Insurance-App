import HttpService from "./HttpService";
import {API_REGISTER, API_LOGIN, API_LOGOUT} from './ApiRoutes/ApiConstants';

export const RegisterUserService = (credentials) => {
    const http      = new HttpService();
    let signupUrl   = API_REGISTER;
    return http
        .postData(credentials, signupUrl)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};
export const LoginUserService = (credentials) => {
    const http      = new HttpService();
    let loginUrl    = API_LOGIN;
    return http
        .postData(credentials, loginUrl)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};
export const LogOutUserService = () => {
    const http = new HttpService();
    let loginUrl    = API_LOGOUT;
    const tokenId   = "user-token";
    return http
        .getData(loginUrl, tokenId)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};
