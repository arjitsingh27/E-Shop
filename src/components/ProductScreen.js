import React from 'react'
import { Button, Card, Col, ListGroup, Row,Image } from 'react-bootstrap'
import products from '../products'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const ProductScreen = ({ match }) => {
    const eachItem = products.find((p) => p._id === match.params.id)
    console.log(eachItem.name)
    return (
        <>
        <Link className="btn btn-light my-3" to='/'>Go Back</Link>
            
        <Row>
                <Col md='6'>
                    <Image src={eachItem.image} fluid/>
                </Col>

                <Col md='3'>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{eachItem.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating rating={eachItem.rating} review={`${eachItem.numReviews} reviews`} />
                        </ListGroup.Item>

                        <ListGroup.Item>Price: ${eachItem.price}</ListGroup.Item>

                        <ListGroup.Item>Description: {eachItem.description}</ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md='3'>
                    <Card>
                        <ListGroup variant='flush'>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                       <strong>${eachItem.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {eachItem.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={eachItem.countInStock===0}>Add To Cart</Button>
                            </ListGroup.Item>


                        </ListGroup>

                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
