import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className='img-fluid' variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description.slice(0, 150)}
                        </Card.Text>
                        <Link to={`/processorder/${product._id}`}> <Button >Process to Buy</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;