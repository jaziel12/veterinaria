import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

/*  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  }; */

  return (
    <div className="App">
        <NavBar />
        <ItemListContainer title="La Granja"/>

    </div>
  )
}

export default App
