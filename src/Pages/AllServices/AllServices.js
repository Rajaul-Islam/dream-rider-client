import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Home/Home/Product/Product';

const AllServices = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <div>
            <Navigation></Navigation>
            <Row xs={1} md={3} className="g-4 mx-4 my-4">



                {products.map(product => <Product product={product} ></Product>)}


            </Row>
        </div>
    );
};

export default AllServices;