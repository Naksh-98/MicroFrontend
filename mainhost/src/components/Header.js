import React, { lazy, useState, useEffect } from 'react'
import MainLogo from '../Images/mainlogo.jpg'
// const CartItems = lazy(() => import('productApp/CartItems'));

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

  console.log(cartItems, "the cart items in the one");
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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/cart">{cartItems?.length} cart</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header
