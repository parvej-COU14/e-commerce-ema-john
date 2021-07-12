import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './Cart.css'
const Cart = (props) => {
    const cart =props.cart
    // const total=cart.reduce((total,prd)=>total+prd.price,0)
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total +product.price * product.quantity;
       
    }
    let shipping=0;
    if(total>35){
        shipping=0
    }
   else if(total>15){
        shipping=4.99
    }
    else if(total>0){
        shipping=12.99
    }
    const tax=(total*0.1).toFixed(2);
    const grandTotal=(total+shipping+Number(tax)).toFixed(2);
    // const formatNumber=num=>{
    //     const presion=num.toFixed(2);
    //     return Number(presion);
    // }
    return (
        <div >
          
         <Card className="text-center">
  <Card.Header><h4>Order Summary</h4></Card.Header>
  <Card.Body>
    <Card.Title><p>Orders Items :{cart.length}</p></Card.Title>
       <p>Product Price ${total}</p>
    <Card.Text>
    <p>Shipping Cost ${shipping}</p>
    <p>Tax +Vat : ${tax}</p>
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted">
  <p className="total">Total-Price :$ {grandTotal}</p>
  {
               props.children
 }
  </Card.Footer>
</Card>

        </div>
    );
};

export default Cart;