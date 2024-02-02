import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UseSelector ,useDispatch } from 'react-redux';
import './Product.css'
import { increment } from '../CartSlice/CartSlice';
function Product() {
  const [items, setItems] = useState([]);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        setItems(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false); // Set loading to false on error as well
      });
  }, [id]); // Include id in the dependency array to re-fetch data when id changes

  return (
    <Container fluid>
    {loading ? (
      // Loading spinner
      <Row className='align-items-center' height={'100vh'}>
        <Col className='text-center'>
          <Spinner animation='border' role='status'>
            <span className='sr-only'></span>
          </Spinner>
        </Col>
      </Row>
    ) : (
      // Product details
      <Row className='product-details-container align-items-center'>
        <Col xs={2} className='thumbnail-col'>
          {items.images ? (
            items.images.map((ele, index) => (
              <img
                key={index}
                src={ele}
                className='thumbnail-image'
                onClick={() => setImg(ele)}
                alt={`Thumbnail ${index}`}
              />
            ))
          ) : (
            <h1 className='no-thumbnail-message'>No thumbnails available</h1>
          )}
        </Col>
        <Col xs={5} className='main-image-col'>
          <img src={img ? img : items.thumbnail} alt="Product Image" className='main-image' />
        </Col>
        <Col xs={5} className='product-details-col'>
          <h3 className='brand'>{items.brand}</h3>
          <h5 className='product-title'>{items.title}</h5>
          <h4 className='price'>${items.price}.00</h4>
          <p className='mrp'>
            MRP : <span className='text-success text-decoration-line-through'>${items.price + items.price}.00</span>
          </p>
          <h5 className='discount'>( {items.discountPercentage}% OFF )</h5>
          <h5 className='category'>{items.category}</h5>
          <p className='stock'>
            STOCK : <span className='text-primary'> {items.stock} only</span>
          </p>
          <p className='description'>
            DESCRIPTION : <span>{items.description}</span>
          </p>
          <p><button onClick={()=>{dispatch(increment(items.id))}}>ADD TO CART</button></p>
        </Col>
      </Row>
    )}
  </Container>
  );
}

export default Product;
