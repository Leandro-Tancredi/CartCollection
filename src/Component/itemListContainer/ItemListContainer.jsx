import React from "react";
import ItemList from "./Itemlist";

const ItemListContainer = ({ greeting }) => {
   
    return (<div>
        <h1 style={{ color: "blue" }}>
            {greeting}
        </h1>
        <ItemList />
     
        
    </div>
    )
}
export default ItemListContainer;
