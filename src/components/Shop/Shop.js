import React , { useState,useEffect } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../utilities/databaseManager';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData'
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
   const first10=fakeData.slice(0,10);
   const [products,setProducts]=useState(first10);
   const [cart,setCart]=useState([]);
   useEffect(()=>{
           const savedData=getDatabaseCart();
           const productKey=Object.keys(savedData);
           const previousCart=productKey.map(existingKey=>{
           const product=fakeData.find(pd=>pd.key===existingKey);
           product.quantity=savedData[existingKey];
           return product;

           })
           setCart(previousCart)
   },[])
   const addHandleButton=(product)=>{
           const toBeAdded=product.key;
           const sameProduct=cart.find(pd=>pd.key===toBeAdded);
           let count=1;
           let newCart;
           if(sameProduct){
           count=sameProduct.quantity+1;
           sameProduct.quantity=count;
           const others=cart.filter(pd=>pd.key !==toBeAdded)
           newCart=[...others,sameProduct]
           }
           else{
               product.quantity=1;
               newCart=[...cart,product]
           }
          setCart(newCart);
        //   const sameProduct=newCart.filter(pd=>pd.key===product.key);
        //   const count=sameProduct.length;
          addToDatabaseCart(product.key,count)
   }
    return (
        <div className="shop-container ">
            <div className="product-container">
            
                {
                    products.map(pd=>
                    <Product
                    key={pd.key}
                    addToShowButton={true} 
                    addHandleButton={addHandleButton}
                    product={pd}>
                    </Product>)
                }
            
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/review">
               <button className="buttonStyle">Review Order</button>
               </Link> 
                </Cart>
            </div>
        </div>
    );
};

export default Shop;