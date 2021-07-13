import React, { useEffect } from "react";
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    Button,
} from "@material-ui/core";
import { useStyles } from "../../styles";
import { LogoutAction } from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function Header(props) {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const authResponse = useSelector((state) => state.userAuth.authResponse);
    const logOut = () => {
        dispatch(LogoutAction());
        history.push("/user/login");
    };

    const login = () => {
        history.push("/user/login");
    };

    const token = localStorage.getItem("user-token");

    useEffect(() => {
        if (authResponse !== "" && authResponse.success === true) {
            alert(authResponse.message);
            localStorage.removeItem("user-token");
        }
        return () => {};
    }, [authResponse]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.header}>
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        <Link to="/home" className={classes.link}>
                            {" "}
                            Cory's Quotamatic
                        </Link>
                    </Typography>
                    {token !== null && token !== "" ? (
                    <Typography variant="h6" noWrap className={classes.title}>
                        Welcome to Your Travel Quote
                    </Typography>
                    ) : (
                    <Typography variant="h6" noWrap className={classes.title}>
                        Sign In or Register to get your quote
                    </Typography>
                    )}
                    {token !== null && token !== "" ? (
                        <Button color="inherit" onClick={logOut}>
                            Logout
                        </Button>
                    ) : (
                        <Button color="inherit" onClick={login}>
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
