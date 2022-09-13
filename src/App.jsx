
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
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
        <ItemDetailContainer/>

    </div>
  )
}

export default App;