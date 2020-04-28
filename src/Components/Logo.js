import React from 'react';
import { Box, Grid, makeStyles} from '@material-ui/core';
import './Logo.css';

const Logo = (config) => {

    return (
        <div>
            <img src={'img/logo.png'} className={'logo'}/>
            <Box component="span" m={1} className={'logoText'}>
                {config.systemName}
            </Box>

        </div>
    )

}
export default Logo;