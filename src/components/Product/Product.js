import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    
    const {img,name,seller,price,stock,key}=props.product;
    return (
        <div className="product d-flex mx-4">
           <div className="product-img">
             <img src={img}alt="" />
           </div>
           <div className="product-name mx-2">
               <h5><Link to={"/product/"+key}>{name}</Link></h5>
               <p>By:{seller}</p>
               <br></br>
               <p className="price">${price}</p>
               <p><small>Only {stock} left in stock- Order very soon!</small></p>
               {
                props.addToShowButton && <button className="mainButton" onClick={()=>props.addHandleButton(props.product)} >
                <FontAwesomeIcon className="mx-2" icon={faShoppingCart} />add to card</button>
               }
           
  

           </div>
        </div>
    );
};

export default Product;