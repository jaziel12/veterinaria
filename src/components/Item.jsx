import React from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';



const Item=({item}) =>{

/*     const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    }; */

    return(
        <div className="flex flex-row	">
            <div>
                    <Link to={"/Detalle/${item:id}"}>
                        <p className="bg-slate-300">{item?.nombre}</p>
                    </Link>
                        <img  className="w-40 h-30" src={item?.image}/>
                        <p className="bg-slate-300 " 	>{item?.tit}</p>
                        {/*<ItemCount onAdd={onAdd} initial={1} stock={8}/> */}
            </div>
        </div>



    )
}

export default Item;