import React from 'react';
import { AppBar, Toolbar, Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    alignCenter: {
        display: "flex",
        alignItems: "center",
    },
    linkStyle: {
        textDecoration: "none",
        color: "#fff",
    },
});

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item className={classes.alignCenter}>

                            <Typography variant="h5">
                                <Link to="/home" className={classes.linkStyle}>
                                    Home
							</Link>
                            </Typography>
                        </Grid>
                        <Grid item sm></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;