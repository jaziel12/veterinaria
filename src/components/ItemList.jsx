import React from "react";
import Item from "./Item.jsx";

const ItemList= ({data=[]})=>{
    return(
        <div className="grid grid-cols-6 gap-3 ">
            {data.map(cache=> <Item key={cache.id} info={cache}/>) }
        </div>
        
    )
}
export default ItemList;