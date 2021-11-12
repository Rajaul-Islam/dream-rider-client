import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';






const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/bikes')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (

    <div>
      <h1>Our Products</h1>
      <Row xs={1} md={3} className="g-4 mx-4 my-4">

        {products.slice(0, 6).map(product => <Product product={product} ></Product>)}


      </Row>
    </div>
  );
};

export default Products;

