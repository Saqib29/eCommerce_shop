import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader'
import Message from '../components/Message'
import CustomSelectForm from '../components/CustomSelectForm'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params]);

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  const addToCardHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <>
      <Link to="/" className="btn btn-dark my-3" style={{ border: 'none' }}>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <div className="image-zoom-container">
              <Image src={product.image} alt={product.name} fluid />
            </div>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                ></Rating>
              </ListGroup.Item>

              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
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
                
                { product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qunatity</Col>
                      <Col>
                        <CustomSelectForm qty={qty} onChange={handleQtyChange} countInStock={product.countInStock} />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ) }

                <ListGroup.Item>
                  <Button
                    onClick={addToCardHandler}
                    variant="success"
                    className="btn-block w-100"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}

export default ProductScreen
