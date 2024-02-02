// List.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';

function List() {
  let [listItem, setListItem] = useState([]);
  let [list, setList] = useState([]);
  let [temp, setTemp] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/search?q=${query || ''}`)
      .then(function (response) {
        setListItem(response.data.products);
        setTemp(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [query]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        setListItem(response.data.products);
        setTemp(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const DataFilter = (data) => {
    let newArr = temp.filter((ele) => {
      return ele.category === data;
    });
    setListItem(newArr);
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={3} className='position-relative'>
          <ListGroup className='position-fixed '>
            <ListGroup.Item action variant="primary" onClick={() => { setListItem(temp); }}>All Items</ListGroup.Item>
            {list.map((item, index) => (
              <ListGroup.Item key={index} action variant="primary" onClick={() => { DataFilter(item); }}>
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={9}>
          <Row className='gy-5'>
            {listItem.map((item, index) => (
              <Col lg={6} key={index} className='d-flex align-items-center justify-content-center '>
                <Card style={{ width: '18rem' }} as={Link} to={`./Product/${item.id}`}>
                  <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} className='object-fit-cover' />
                  <Card.Body className='text-decoration-none'>
                    <Card.Text className='fw-bold'>{item.category}</Card.Text>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Title>${item.price}.00</Card.Title>
                    <ListGroup.Item action variant="success" className='w-25 text-center p-1 rounded-2 fw-bolder text-success d-flex align-items-center justify-content-center '>
                      {item.rating} <FaStar />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default List;
