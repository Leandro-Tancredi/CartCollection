import './App.css';
import NavBar from './Component/Navbar/Navbar.jsx';
import React from 'react';
import ItemListContainer from './Component/itemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Hola bienvenidos a Cósmica Intuición' />
    </div>
  );
}

export default App;
