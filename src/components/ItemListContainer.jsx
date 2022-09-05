import React from "react";
import ItemList from "./ItemList";

const ItemListContainer =({title})=>{






    return (
        <div className="text-center bg-amber-300">
            <h1>{title}</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;