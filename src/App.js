import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import { productData, productDataTwo } from './components/products/data';
import Products from './components/products';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Grab Your favorite Now' data={productData} />
      <Feature />
      <Products heading='Only For You' data={productDataTwo} />
      <Footer />


    </Router>
  );
}

export default App;
