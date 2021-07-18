import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../images/logo.png'
import './Header.css'
const Header = () => {
   const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    return (
           <div className="header">
             <div className="img">
             <img src={logo} alt=""></img>
             </div>
              <nav >
                 <Link to="/shop">Shop</Link>
                 <Link to="/review">Review Order</Link>
                 <Link to="/manage">Manage Inventory</Link>
                 <button onClick={()=>setLoggedInUser({})}>Sign Out</button>
              </nav>
           </div>
    );
};

export default Header;