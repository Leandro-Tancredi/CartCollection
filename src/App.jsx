import './App.css';
import NavBar from './Component/Navbar/Navbar.jsx';
import React from 'react';
import ItemListContainer from './Component/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Component/itemListContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/home' element= {<ItemListContainer />}/>
       
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
