import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import products from '../products'
import EachProducts from './EachProducts'


const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map((items) => (
                        <Col sm='12' md='6' lg='4' xl='3'>
                            <EachProducts items={items} />
                        </Col>
                    ))
                }
            </Row>
        </>)
}

export default HomeScreen
