import React from 'react';
import ItemCount from './components/butoon/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/menu/NavBar';

function App() {

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };

  return (
    <div className="App">
        <NavBar />
        <ItemListContainer title="La Granja"/>
        <ItemCount onAdd={onAdd} initial={1} stock={8}/>
    </div>
  )
}

export default App
