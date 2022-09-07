import React from "react";
import ItemCount from "./butoon/ItemCount";


const Item=({info}) =>{

    return(
        <div ClassName="flex flex-row	">
            <div>
                <p className="bg-slate-300">{info.nombre}</p>
                <img  className="w-40 h-30" src={info.image}/>
                <p className="bg-slate-300 " 	>{info.tit}</p>
            <ItemCount  initial={1} stock={8}/>
                
            </div>

            
        </div>



    )
}

export default Item;