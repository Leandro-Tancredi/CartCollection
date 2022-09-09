import React from "react";
import { useParams } from "react-router-dom";
//import ItemList from "./Itemlist";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
   const {idProducto} = useParams() 
   
    return (
    <div>
       {/*<ItemList />*/}
     <ItemDetailContainer idProducto={idProducto} />
        
    </div>
    )
}
export default ItemListContainer;
