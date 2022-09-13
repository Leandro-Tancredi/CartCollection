import './App.css';
import NavBar from './Component/Navbar/Navbar.jsx';
import React from 'react';
import ItemListContainer from './Component/itemListContainer/ItemListContainer.jsx';
import {BrowserRouter, Routes,Route  } from "react-router-dom";
import ItemDetailContainer from './Component/itemListContainer/ItemDetailContainer';
import PreguntasFrecuentes from './Component/Navbar/preguntasFrecuentes';
import AcercaDeMi from './Component/Navbar/AcercaDeMi';
import CartContainer  from "./Component/Cart";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element= {<ItemListContainer />}/>
          <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
          <Route path='/category/PreguntasFrecuentes' element= {<PreguntasFrecuentes/>}/>
          <Route path='/category/Acerca-de-mi' element= {<AcercaDeMi/>}/>
          <Route path='/cart' element= {<CartContainer/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
