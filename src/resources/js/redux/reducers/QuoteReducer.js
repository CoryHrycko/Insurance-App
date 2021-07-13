import {
    LOADING,
    LOAD_QUOTE_SUCCESS,
    LOAD_QUOTE_ERROR,
    CODE_ERROR,
} from "../actions/ActionTypes";

const initialState = {
    quoteData: "",
};

const QuoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return  {
                ...state,
                quoteData: "loading...",
            };
        case LOAD_QUOTE_SUCCESS:
            return {
                ...state,
                quoteData: action.response,
            };
        case LOAD_QUOTE_ERROR:
            return {
                ...state,
                quoteData: action.response,
            };
        case CODE_ERROR:
            return {
                ...state,
                quoteData:
                    "There seems to be a problem, please refresh your browser",
            };
        default:
            return state;
    }
};

export default QuoteReducer;
