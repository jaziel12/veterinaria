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
            <h1 className='bg-red'>
                Gracias por comprar en <strong>La Granja</strong>, te dejamos el número de seguimiento:{' '}
                {orderId}
            </h1>
        );
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout;