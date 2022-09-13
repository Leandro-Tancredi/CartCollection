import React from "react";
import Item from "./Item";
import Boton from "./itemCount";

const ItemDetail = ({producto}) => {
     
      const onAdd = (acumulador) => {
            console.log(`usted compró ${acumulador} unidades`)
        }
      return(   
            <>         
                  <Item producto={producto} /> 
                  <Boton Stock={5} initial={0} onAdd={onAdd} />
            </>
      )};

export default ItemDetail;

