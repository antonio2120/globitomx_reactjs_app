import React from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import CardSimple from './CardSimple'

const useStyles = makeStyles ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
});

const ProductSection = () => {
    const  classes  = useStyles();
    return (
        <div className={classes.root} >
            <h2>Globos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor dolorem ducimus eaque esse, eum facere fuga in non omnis quidem rerum veniam voluptas? Amet asperiores aut error odio reiciendis.</p>
            <Grid container spacing={3} >
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/4db0c6eb157d4f4fd58a39bd48a80dc0.jpg'} height={140}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/4e236dcc7aa5f5826388bf3213612311.jpg'} height={140} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/48d582507ff6b53cf8be3f7369c40f84.jpg'}  height={140} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/68d1049ddaf0a12eaa5dea16d1ceccd8.jpg'}  height={140} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/9d2b5d58ff550d0c2cf7a57386df2a9f.jpg'} height={140}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/11ef0ec35839563cecda258720522007.jpg'} height={140} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/52d6122f501b7f1c72bcf09e77d058e0.jpg'}  height={140} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/cfe18bb2fa6bd291806666e1b76b17ad.jpg'}  height={140} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/FB_IMG_1511972178228.jpg'} height={140}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/FB_IMG_1505666370060.jpg'} height={140} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/FB_IMG_1529121461179.jpg'}  height={140} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/products/IMG_20171101_065610.jpg'}  height={140} />
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );

}



export default ProductSection;
