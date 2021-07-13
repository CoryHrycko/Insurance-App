import React from "react";
import ReactDOM from "react-dom";
import ReactApp from "./components/ReactApp";
import  store  from "./redux/store/MakeStore";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

