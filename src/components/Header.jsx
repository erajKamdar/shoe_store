import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { HomeIcon } from './index';
import { CartContext } from '../contexts/CartContext';
import {CartIcon} from './index';

const Header = () => {
    const {itemCount} = useContext(CartContext);

    return ( 
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
           
        <div id="navbar">
          <ul className="navbar-nav sm-2">

            <li className="nav-item">
              <Link to='/' className="nav-link"> <HomeIcon width="20px" /> Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to='/cart' className="nav-link"><CartIcon width="20px"/> Cart ({itemCount}) </Link>
            </li>     
          </ul>
        </div>
      </nav>
    </div>
            
    )
}
 
export default Header;