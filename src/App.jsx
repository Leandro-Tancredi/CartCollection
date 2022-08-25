import './App.css';
import NavBar from './Component/Navbar/Navbar.jsx';
import React from 'react';
import ItemListContainer from './Component/itemListContainer/ItemListContainer.jsx';
import Boton from './Component/Navbar/Button';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Hola bienvenidos a Cósmica Intuición' />
      <Boton />
    </div>
  );
}

export default App;
