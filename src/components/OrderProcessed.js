import React from 'react';

const OrderProcessed = (props) => {
    return (
        <div>
            <h3 className='text-center text-dark'>Order Processed {props.comision}</h3>
        </div>
    );
};

export default OrderProcessed;