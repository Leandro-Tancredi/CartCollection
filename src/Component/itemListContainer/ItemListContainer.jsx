import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item.jsx";
import { Link } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
const ItemListContainer = () => {
    const [category, setCategory]= useState("Lectura única")
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db= getFirestore();
        const items= collection(db,"items");
        const q=query(items, where("category", "==", category))
        getDocs(q).then((snapshot)=>{
           const docs= snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
           }))
           setProductos(docs);
})},[category]);
    
const selectChangeHandler=(ev)=>{
        setCategory(ev.target.value);
    };

    return (
        <>
            <div className="container mt-5">  
                <div>
                    <select onChange={selectChangeHandler}>
                        <option value="Lectura única">Lecturas simples</option>
                        <option value="Lectura múltiple">3 meses de Lectura</option>
                    </select>
                </div> 
                <div className="row ">
                    {productos.map((productos, index) => {
                return ( 
                        <div className="col-md-3 " key={index}>
                        <Link to={`Item/${index}`}>
                            <Item producto={productos} />
                        </Link>
                        </div>
                        )})}
                </div>
            </div>
        </>
        )
};
                           
export default ItemListContainer;

                        

                        
                        





