import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const EachProducts = ({ items }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${items._id}`}>
                <Card.Img src={items.image} variant="top" />
            </Link>

            <Card.Body>
                <Link to={`/product/${items._id}`}>
                    <Card.Title as="div">
                        <strong>{items.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div className='my-3'>
                        <Rating rating={items.rating} review={`${items.numReviews} reviews`} color='red'/>
                    </div>
                </Card.Text>

                <Card.Text as='h3'>${items.price}</Card.Text>

            </Card.Body>

        </Card>
    )
}

export default EachProducts
