import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) => {



    return (
    <Link to={`Item/${producto.id}`}>
        <div className="card" >
            <img src={producto.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">${producto.price}</p>
            </div>
        </div>
    </Link>
    )
}
export default Item;
