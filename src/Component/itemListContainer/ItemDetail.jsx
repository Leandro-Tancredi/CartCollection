import React,{useContext} from "react";
import Item from "./Item";
import Boton from "./itemCount";
import { Context } from "../Context/CartContext"; 


const ItemDetail = ({producto}) => {
     
      const {addItem} =useContext(Context);

      const onAdd = (acumulador) => {
            
           addItem(producto,acumulador);
        
      }
            

      return(   
            <>         
                  <Item producto={producto} /> 
                  <Boton Stock={5} initial={0} onAdd={onAdd} />
            </>
      )};

export default ItemDetail;

