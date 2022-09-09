import React from "react";
import { useParams } from "react-router-dom";
//import ItemList from "./Itemlist";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
   
   
    return (
    <div>
       {/*<ItemList />*/}
     <ItemDetailContainer />
        
    </div>
    )
}
export default ItemListContainer;
