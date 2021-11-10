import React from 'react';
import { useParams } from 'react-router';

const ProcessOrder = () => {
    const {id}=useParams();
    return (
        <div>
            
                <h1>Order {id} </h1>
            
        </div>
    );
};

export default ProcessOrder;