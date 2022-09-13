import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item})=>{
        const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
    }; 
    return(
        <div className="flex ">
        
        <img className="" src={item.image} alt="" /> 
        <div className="text-center mt-40">
        <p className="text-center">{item.nombre}</p>
        <p>{item.detalles}</p>
        <h2 className="text-red-700	">{item.tit}</h2>
        <ItemCount onAdd={onAdd} initial={1} stock={8}/>
        </div>  
    </div>
        
    )
}
export default ItemDetail;