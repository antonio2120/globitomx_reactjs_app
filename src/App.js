import React from 'react';
import Container from '@material-ui/core/Container';

import NavBar from './Components/NavBar'
import Slides from './Components/Slides'
import BannerTop from './Components/BannerTop';
import ProductSection from './Components/ProductSection';
import GallerySection from './Components/GallerySection';
import Contact from './Components/Contact';


import './App.css';

function App() {
    const config = {
        systemName: 'Globito.mx'
    }
  return (
    <div className="App">
        <Container maxWidth="md">
          <header className="App-header">
            <NavBar systemName={ config.systemName}  />
            <Slides/>
            <BannerTop/>
            <ProductSection/>
            <GallerySection/>
            <Contact/>
          </header>
        </Container>
    </div>
  );
}

export default App;
