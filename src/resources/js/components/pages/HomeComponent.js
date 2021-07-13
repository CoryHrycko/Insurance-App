import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../../styles";
import { useHistory } from "react-router-dom";
function HomeComponent() {
    const history = useHistory();
    const classes = useStyles();
    const gotToRegister = (e, url) => {
        history.push(url);
    };

    const loggedIn = () => {
        if (!localStorage.getItem("user-token")) {
            return (
                <Button
                    variant="contained"
                    className={classes.extraBtnStyle}
                    onClick={(e) => gotToRegister(e, "/user/login")}
                    size="large"
                    color="primary"
                >
                    Get Quote!
                </Button>
            );
        }
        return (
            <Button
                variant="contained"
                className={classes.extraBtnStyle}
                onClick={(e) => gotToRegister(e, `/user/get-quote`)}
                size="large"
                color="primary"
            >
                Get Quote!
            </Button>
        );
    };
    return (
        <>
            <div className={classes.homeRoot}>
                <div className={classes.containerDiv}>{loggedIn()}</div>
            </div>
        </>
    );
}
export default HomeComponent;
