import React from 'react'
import { useStateValue } from './StateProvider'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


const Checkout = () => {
    const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
        <div className="check__left">
        <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Monitors/Fest/June/MMD_Header_1500X300.jpg" alt="checkoutpage-ad" />
    {basket?.length === 0 ? (
        <div>
            <h2 className='checkout__title'>Your Amazon Cart is empty.</h2>
            <p>You have no items in your cart.</p>
        </div>
        ) : (
            <div>
                <h2 className='checkout__title'>Your Shopping Cart</h2>
                {/* list of products */}
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id} 
                    title={item.title} 
                    image={item.image} 
                    price={item.price} 
                    rating={item.rating}
                    />
                ))}
                
            </div>
        )}
        </div>
        {basket?.length > 0 && (
            <div className="checkout__right">
                <h1>Subtotal</h1>
                <Subtotal/>
            </div>
        )}
    </div>
  )
}

export default Checkout