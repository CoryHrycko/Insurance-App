import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/HomeComponent";
import LoginComponent from "./components/pages/LoginComponent";
import Register from "./components/pages/RegisterComponent";
import ClosedRoutes from "./ClosedRoutes";
import { Guards } from "./Guards";
import Header from "./components/templates/Header";


function Routes() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <Redirect to={{ pathname: "/user/login" }} />} />
                    <Route path="/home" component={Home} />
                    <Route path="/user/login" component={LoginComponent} />
                    <Route path="/user/register" component={Register} />

                    <Guards
                        path="/user"
                        token="user-token"
                        routeRedirect="/user/login"
                        component={ClosedRoutes} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
export default Routes;
