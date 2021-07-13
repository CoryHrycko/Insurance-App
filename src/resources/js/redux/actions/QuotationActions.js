import { GetQuote } from "../../services/QuotationService";
import {
    LOAD_QUOTE_SUCCESS,
    LOAD_QUOTE_ERROR,
    CODE_ERROR,
    LOADING,
} from "../actions/ActionTypes";

export const LoadQuote = (quoteData) => {
    return (dispatch) => {
        dispatch({ type: LOADING });
        GetQuote(quoteData).then(
            (response) => {
                if (
                    response.hasOwnProperty("success") &&
                    response.success === true
                ) {
                    dispatch({ type: LOAD_QUOTE_SUCCESS, response });
                } else if (
                    response.hasOwnProperty("success") &&
                    response.success === false
                ) {
                    dispatch({ type: LOAD_QUOTE_ERROR, response });
                }
            },
            (error) => {
                dispatch({ type: CODE_ERROR, error });
            }
        );
    };
};
