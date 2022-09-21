import './App.css';
import NavBar from './Component/Navbar/Navbar.jsx';
import React, {useContext} from 'react';
import ItemListContainer from './Component/itemListContainer/ItemListContainer.jsx';
import {BrowserRouter, Routes,Route  } from "react-router-dom";
import ItemDetailContainer from './Component/itemListContainer/ItemDetailContainer';
import PreguntasFrecuentes from './Component/Navbar/preguntasFrecuentes';
import AcercaDeMi from './Component/Navbar/AcercaDeMi';
import Cart  from "./Component/Cart";
import Context from '../src/Component/Context/CartContext';
import CartContext from '../src/Component/Context/CartContext';




function App() {
  const Value = useContext(Context)
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element= {<ItemListContainer />}/>
              <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
              <Route path='/category/PreguntasFrecuentes' element= {<PreguntasFrecuentes/>}/>
              <Route path='/category/Acerca-de-mi' element= {<AcercaDeMi/>}/>
              <Route path='/cart' element= {<Cart/>}/>
            </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
