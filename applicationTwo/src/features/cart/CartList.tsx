import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Product } from '../../shared/types/mainProduct';

const CartList = () => {
  const cartItems = useSelector((state: RootState) => state.product.cartItems);


  console.log(cartItems, "im the productslice");

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart</h2>
        <span className="cart-count-badge">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <p className="cart-empty-text">Your cart is empty</p>
          <p className="cart-empty-subtext">Add some products to get started!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item: Product) => (
              <div key={item.id} className="cart-item-card">
                <div className="cart-item-image-wrapper">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <div className="cart-item-price-row">
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-row">
              <span className="cart-summary-label">Total Items:</span>
              <span className="cart-summary-value">{cartItems.length}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span className="cart-summary-label">Total Price:</span>
              <span className="cart-summary-value">
                ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartList;