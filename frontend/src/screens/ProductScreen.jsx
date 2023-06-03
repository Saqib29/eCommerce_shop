import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
  const { id } = useParams();
  
  const product = products.find(p => p._id === id)
  
  return (
    <>
        <Link to='/' className='btn btn-dark my-3' style={{ border: 'none' }} > Go Back </Link>
        <Row>
          <Col md={6}>
            <div className='image-zoom-container'>
              <Image src={product.image} alt={product.name} fluid />
            </div>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
              </ListGroup.Item>

              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>Description: {product.description}</ListGroup.Item>

            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col><strong>${product.price}</strong></Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Sattus: </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant='success' className='btn-block w-100' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>
                </ListGroup.Item>

              </ListGroup>
            </Card>
          </Col>
        </Row>
    </>
  )
}

export default ProductScreen
