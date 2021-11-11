import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const UserReview = () => {
    const [reviews, setReview] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data)
            })
    }, [])
    return (
        <Container>
            <h1>User Review</h1>
            <Row xs={1} md={3} className="g-4">

                {
                    reviews.map(review =>
                        <Col key={review._id}>

                            <Card border="secondary" >
                                <Card.Header>{review?.rating}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{review.reviewerName}</Card.Title>
                                    <Card.Text>
                                        {review.review}
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        </Col>





                    )
                }
            </Row >
        </Container>
    );
};

export default UserReview;