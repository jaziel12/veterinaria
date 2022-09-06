import React from "react";
import ItemCount from "./butoon/ItemCount";


const Item=({info}) =>{

    return(
        <div ClassName="flex flex-row	">
            <a href="">
                <p>{info.nombre}</p>
                <img  className="w-40 h-30" src={info.image}/>
                <p>{info.tit}</p>
                
            </a>
            <ItemCount  initial={1} stock={8}/>
            
        </div>



    )
}

export default Item;