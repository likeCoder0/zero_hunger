import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useUserAuth } from '../context/UserAuthContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FoodCard =(props)=> {
    const firebase=useUserAuth();
    const [url,setURL]=useState(null);
    const navigate=useNavigate();

    useEffect(()=>{
        firebase.getImageURL(props.imageURL).then(url=>setURL(url));
    },[])
  return (
    <div>
        <Container>
        <Card style={{ width: "95%",margin:"25px"}} >
        <Row>
            <Col>
        <Card.Img variant="top" src={url} />
        </Col>
            <Col xs={8}>
        <Card.Body>
          <Card.Title>{props.displayName}</Card.Title>
          <Card.Text>
            The Donor name is {props.displayName}
             {/* and this book is sold by{" "} */}
            {/* {props.displayName} and this book is costs Rs. {props.price} */}
          </Card.Text>
          <Button variant="primary"  onClick={e=>navigate(`/book/view/${props.userID}`)}>View</Button>
        </Card.Body>
        </Col>
        </Row>
      </Card>
        </Container>
    </div>
  )
}

export default FoodCard;