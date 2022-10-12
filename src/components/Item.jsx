import React from "react";
import { Link } from 'react-router-dom';



const Item=({item}) =>{



    return(
        <div className="flex flex-ro	hover:scale-110 ">
            <div>
                    <Link to={`/detalle/${item.id}`}>
                        <p className="bg-slate-300 ">{item?.nombre}</p>
                    </Link>
                        <img  className="w-40 h-30 " src={item?.image}/>
                        <p className="bg-slate-300 " 	>{item?.tit}</p>
            </div>
        </div>



    )
}

export default Item;