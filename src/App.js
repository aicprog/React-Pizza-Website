import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./components/Navbar/globalStyles";
import Hero from "./components/Hero";
import { productData, dessertsData } from "./components/Products/data";
import Products from "./components/Products";
import Feature from "./Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature/>
      <Products heading="Dream Desserts" data={dessertsData} />
      <Footer/>
    </Router>
  );
}

export default App;
