import React from "react";
//import ItemList from "./Itemlist";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({ greeting }) => {
   
    return (<div>
        <h1 style={{ color: "blue" }}>
            {greeting}
        </h1>
        {/*<ItemList />*/}
     <ItemDetailContainer />
        
    </div>
    )
}
export default ItemListContainer;
