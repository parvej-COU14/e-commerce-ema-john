import React,{useState,useEffect} from 'react'
import Cart from '../Cart/Cart';
import fakeData from '../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../utilities/databaseManager';
import './Review.css'
import DoneImage from '../images/oder.png'

const Review = () => {
    const [cart,setCart]=useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false)
    const palceOederHandle=()=>{
     setCart([]);
     setOrderPlaced(true)
     processOrder()
    }
    const removeProduct=(productKey)=>{
    const newCart=cart.filter(pd=>pd.key!==productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);
        const cartProducts=productKeys.map(key=>{
          const product=fakeData.find(pd=>pd.key===key);
           product.quantity=savedCart[key];
          return product;

        });
       setCart(cartProducts)
    },[]);
    let thankyou;
    if(orderPlaced){
      thankyou=<img src={DoneImage} alt="success"></img>
     
    }

    return (
          <div className="container d-flex">
        <div className="reviewProduct-container">
          
           {
               cart.map(pd=>
               <ReviewItem 
               key={pd.key}
               removeProduct={removeProduct}
               product={pd}>

               </ReviewItem>)
           }
           {
             thankyou
           } 
        </div>
        <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={palceOederHandle}className="buttonStyle">Place Order</button>
        </Cart>
        </div>
        </div>
    );
};

export default Review;