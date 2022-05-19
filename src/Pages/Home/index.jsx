import React, { Component } from 'react';
// Components
import Banner from '../../Components/Banner';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import ProductList from '../../Components/ProductList';

export default class Home extends Component {
  render() {
    return (
      <div id='home-page' className='page'>
        <Navbar />
        <div className='content'>
          <Banner />
          <ProductList />
          <Footer />
        </div>
      </div>
    )
  }
}

