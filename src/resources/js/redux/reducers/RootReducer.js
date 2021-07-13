import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import QuoteReducer from "./QuoteReducer";

const RootReducer = combineReducers({
    userAuth: AuthReducer,
    userDetails: QuoteReducer,
});


export default RootReducer;
