import React from 'react';
import {Container,Box} from '@material-ui/core';
import { red, blue, green} from '@material-ui/core/colors';
import Image from 'material-ui-image';
import CardSimple from './CardSimple'


const Slides = (props) => {
    return (
        <Container maxWidth="md">
            <CardSimple src={'img/slide1.jpg'} height={500} />
        </Container>
    )
}
export default Slides;