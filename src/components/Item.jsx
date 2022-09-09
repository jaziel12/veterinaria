import React from "react";
import ItemCount from "./ItemCount";


const Item=({info}) =>{

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };

    return(
        <div className="flex flex-row	">
            <div>
                <p className="bg-slate-300">{info.nombre}</p>
                <img  className="w-40 h-30" src={info.image}/>
                <p className="bg-slate-300 " 	>{info.tit}</p>
                <ItemCount onAdd={onAdd} initial={1} stock={8}/>
                
            </div>

            
        </div>



    )
}

export default Item;