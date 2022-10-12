import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer';
import ItemDetail from './components/ItemDetail';
import CartProvider from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/checkout';

function App() {

/*  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  }; */

  return (
    <CartProvider>

      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route exact path='/detalle/:id' element={<ItemDetailContainer/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
      </Routes> 
      <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;