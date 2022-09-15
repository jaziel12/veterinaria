
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer';
import ItemDetail from './components/ItemDetail';

function App() {

/*  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  }; */

  return (
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/Categoria/:CategoriaId' element={<ItemListContainer/>} />
        <Route exact path='/Detalle/:id' element={<ItemDetailContainer/>} />
      </Routes> 
      <Footer/>
      </BrowserRouter>
  )
}

export default App;