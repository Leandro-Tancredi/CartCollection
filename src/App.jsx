import './App.css';
import NavBar from './Component/Navbar/Navbar.jsx';
import React from 'react';
//import ItemListContainer from './Component/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Component/itemListContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/*<ItemListContainer greeting='Hola bienvenidos a Cósmica Intuición' />*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
