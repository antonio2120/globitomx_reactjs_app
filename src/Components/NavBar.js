import React from 'react';
import {Link, Grid , makeStyles}from '@material-ui/core/';
import Logo from './Logo';

const useStyles = makeStyles ({
    root: {
        flexGrow: 1,
    },
    menu: {
        alignItems: 'flex-end',
        textAlign:'right',
    },
    item:{
        paddingLeft:10
    }
});
const NavBar = (props) => {
    const  classes  = useStyles();
    return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Logo systemName={props.systemName}/>
            </Grid>
            <Grid className={classes.menu} item xs={9} display="flex" flexDirection="row-reverse">
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => { console.info("I'm a button.");   }}
                    className={classes.item}
                >
                    Home |
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                    className={classes.item}
                >
                    Globos |
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                    className={classes.item}
                >
                    Mesa de Dulces |
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                    className={classes.item}
                >
                    Cotiza
                </Link>
            </Grid>
        </Grid>
    </div>
    )
};

export default NavBar;