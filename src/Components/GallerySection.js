import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 800,
    },
}));

const GallerySection = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>Mesa de Dulces</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor dolorem ducimus eaque esse, eum facere fuga in non omnis quidem rerum veniam voluptas? Amet asperiores aut error odio reiciendis.</p>

            <GridList cellHeight={300} className={classes.gridList} cols={3}>
                <GridListTile key={'x'} cols={2}>
                    <img src={'img/products/0b398cda4a29664bc2b8e2c570aa0da9.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'img/products/15b57a99abd0d7c91ce2f898296c0f9d.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'img/products/cff7db3bb52f6263db56958e236ecdaa.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'img/products/d2e36207e0a70b90bfc1c68551fe1397.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'img/products/ccfc30f2c33671dfc6c649ff53efc887.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={3}>
                    <img src={'img/products/FB_IMG_1485376163796.jpg'} alt={'Example'} />
                </GridListTile>

            </GridList>
        </div>
    );
}

export default GallerySection;