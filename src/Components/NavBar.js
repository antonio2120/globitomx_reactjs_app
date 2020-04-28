import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';

const NavBar = (props) => {

    return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Logo systemName={props.systemName}/>
            </Grid>
            <Grid item xs={9} display="flex" flexDirection="row-reverse">
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => { console.info("I'm a button.");   }}
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
                >
                    Cotiza
                </Link>
            </Grid>
        </Grid>
    </div>
    )
};

export default NavBar;