import React, { useState, useEffect } from 'react'
import MainLogo from '../Images/mainLogo.png'
import { Link } from "react-router-dom"

const Header = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const handleAddToCart = (e) => {
      const cartItems = e.detail;
      setCartItems(cartItems);
    };

    window.addEventListener('addToCart', handleAddToCart);

    return () => {
      window.removeEventListener('addToCart', handleAddToCart);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-content">
          <img src={MainLogo} alt="Main Logo" className="logo" />
          <div className="logo">
            <h1>My MicroFrontend App</h1>
          </div>
          <nav className="nav-menu">
            <ul>
              <li><Link to="/">Home </Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/signin">signin</Link></li>
              <li><Link to="/cart">{cartItems?.length} cart</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header
