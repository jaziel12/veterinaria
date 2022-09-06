import React from "react";
import Item from "./Item.jsx";

const ItemList= ({data=[]})=>{
    return(
        data.map(cache=> <Item key={cache.id} info={cache}/>)
        
    )
}
export default ItemList;