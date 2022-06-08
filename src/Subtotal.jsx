import React from 'react'
import './subtotal.css'
import { useStateValue } from "./StateProvider"

// For Cart Total, uncomment export in reducer
// import { getBasketTotal } from './reducer'


const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(dispatch);
  let total = 0;
  basket.map((cart)=>(
    total = total + cart.price
  ));

  return (
    <div className='subtotal'>
      <strong>Subtotal ({basket?.length} items): ₹{/* getBasketTotal(basket) */total}</strong>
      <small className='subtotal__gift'><input type="checkbox"/> This Order contains a gift</small>
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
