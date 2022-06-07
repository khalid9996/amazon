import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from "./StateProvider"

const CheckoutProduct = ({id, title, image, price, rating}) => {

  const [{ basket }, dispatch ] = useStateValue();
  console.log(basket);
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  }

  return (
    <div className='checkoutProduct'>
      
        <img className='checkoutProduct__image' src={image} alt={title} />
        
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