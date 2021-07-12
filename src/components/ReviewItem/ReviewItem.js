import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './ReviewItem.css'

const ReviewItem = (props) => {
  // console.log(props)
    const {name,quantity,key,price}=props.product
    return (
        <Card className="reviewItem">
  <Card.Header className="title" as="h5">{name}</Card.Header>
  <Card.Body>
    <Card.Title>Quantity : {quantity}</Card.Title>
    <Card.Text>
     <p><small>${price}</small></p>
    </Card.Text>
    <Button onClick={()=>props.removeProduct(key)} >Remove</Button>
  </Card.Body>
</Card>
    );
};

export default ReviewItem;