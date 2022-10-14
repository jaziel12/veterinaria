import React from 'react';
import { useState } from 'react';
import Form from './Form';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            //No m deja estilar
            <main className="h-min-main pb-6">

            <h1 className=' '>
                Gracias por comprar en <strong>La Granja</strong>, te dejamos el número de seguimiento:{' '}
                {orderId}
            </h1>
            </main>
        );
    }

    return (
        <div className='h-min-main pb-6 bg-red'>
            <Form  handleId={handleId} />
        </div>
    );
};

export default Checkout;