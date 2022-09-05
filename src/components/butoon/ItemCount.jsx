import React from 'react';
import { useState } from 'react';


const ItemCount = ({ onAdd, initial, stock }) => {



const [qty, setQty] = useState(initial);


    const addProduct = (num) => {
    setQty(qty + num);
};

    return (
    <div className=" flex	flex-col justify-center	items-center		">
        <div className="bg-green-500  grid w-36	h-18 font-semibold	text-base border-4	border-red-800 ">
        <button
            className="bg-pink-900  text-blue-50	w-full	h-full	"
            onClick={() => addProduct(-1)}

            disabled={qty === initial}
        >
            -
        </button>
        <span className="bg-white		text-center	h-full">{qty}</span>
        <button
            className="bg-indigo-500 text-blue-50	w-full	h-full	"
            onClick={() => addProduct(+1)}
            disabled={qty === stock}
        >
            +
        </button>
        </div>

        <button
        className="bg-purple-900  border-4	border-red-800	"
        onClick={() => {
            onAdd(qty);
        }}
        disabled={stock === 0 ? true : null}
        >
        Añadir
        </button>
    </div>
    );
};

export default ItemCount;
