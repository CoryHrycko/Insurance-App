import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import QuoteComponent from "./components/pages/QuoteComponent";

export default function ClosedRoutes(props) {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path={`${props.match.path}/get-quote`}
                    component={QuoteComponent} />
                <Route
                    exact
                    path={props.match.path}
                    render={(props) => (
                        <Redirect to={{ pathname: `${props.match.path}/get-quote` }} />
                    )} />
            </Switch>
        </div>
    );
}
