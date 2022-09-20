//feature 1
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import NavFooter from './outlets/NavFooter';
import CartPage from './pages/CartPage';
import Product from './pages/Product';

 class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<NavFooter />}>
          <Route  index element={<Product />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Route>
      </Routes>
    )
  }
}


export default App;

