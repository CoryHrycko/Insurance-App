import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, TextField, Card, Paper } from "@material-ui/core";
import { useStyles } from "../../styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { connect, useDispatch, useSelector } from "react-redux";
import { LoadQuote } from "../../redux/actions/QuotationActions";

const QuoteComponent = () => {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [fields, setState] = useState({
        age: "",
        currency_id: "EUR",
        start_date: "",
        end_date: "",
        result: "",
    });
    const handleFieldChange = (e) => {
        setState({
            ...fields,
            [e.target.id]: e.target.value,
        });
    };
    const getQuote = (e) => {
        e.preventDefault();
        dispatch(LoadQuote(fields, history));
        showResult();
    };
    const selector = useSelector((state) => state.userDetails);

    const showResult = () => {
        if (selector.quoteData != null) {
            return <div>{selector.quoteData}</div>;
        }
    };
    return (
        <Card>
            <div className={classes.fullWidthProfile}>
                <form onSubmit={getQuote}>
                    <div>
                        <TextField
                            type="text"
                            className={classes.fullWidth}
                            required
                            margin="normal"
                            variant="outlined"
                            label="age"
                            id="age"
                            value={fields.age}
                            onChange={handleFieldChange}
                        />
                    </div>
                    <div>
                        <TextField
                            type="text"
                            className={classes.fullWidth}
                            required
                            margin="normal"
                            variant="outlined"
                            label="currency_id"
                            id="currency_id"
                            helperText="must be capitolized"
                            value={fields.currency_id}
                            onChange={handleFieldChange}
                        />
                    </div>
                    <div>
                        <TextField
                            id="start_date"
                            label="Start Date"
                            type="date"
                            required
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={fields.start_date}
                            onChange={handleFieldChange}
                        />
                    </div>
                    <div>
                        <TextField
                            id="end_date"
                            label="End Date"
                            type="date"
                            required
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={fields.end_date}
                            onChange={handleFieldChange}
                        />
                    </div>
                    <div className={classes.textField}/>
                    <div>
                        <div>
                            <Button
                                type="submit"
                                className={classes.fullWidth}
                                variant="contained"
                                color="primary"
                                endIcon={<AccountCircleIcon />}
                            >
                                <b>Get Quote </b>
                            </Button>
                            <br />
                            <div className={classes.linkContainer}>
                                <Link to="/user/register">Register Here</Link>
                            </div>
                        </div>
                        <div className={classes.linkContainer}>
                            <Link to="/home">Back To Home Page </Link>
                        </div>
                        <div>
                            {Number.isInteger(selector.quoteData[0].total) ? (
                                <Paper elevation={10}>
                                    {" "}
                                    $ {selector.quoteData[0].total}{" "}
                                    {selector.quoteData[0].currency_id}
                                </Paper>
                            ) : (
                                <div>{selector.quoteData[0].total}</div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    );
};

export default connect()(QuoteComponent);
