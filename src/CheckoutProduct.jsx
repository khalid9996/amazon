import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from "./StateProvider"

const CheckoutProduct = ({id, title, image, price, rating}) => {

  const [{ basket }, dispatch ] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  }

  return (
    <div className='checkoutProduct'>
      <div className='img__div'>
        <img className='checkoutProduct__image' src={image} alt={title} />
        </div>
        <div className="checkoutProduct__info">
          
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {
                Array (rating).fill().map((_) => {
                     return <p>⭐</p>;
                 })}
            </div>
            
            <button onClick={removeFromCart}>Remove from cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct