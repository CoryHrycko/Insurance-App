import HttpService from "./HttpService";
import {API_QUOTATION} from './ApiRoutes/ApiConstants';

export const GetQuote = (quoteData) => {
    const http      = new HttpService();
    let quoteUrl   = API_QUOTATION;
    return http
        .postData(quoteData, quoteUrl)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};
