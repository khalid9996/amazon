import React from 'react'
import './home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
    <img 
     className='home__img'
    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheBoys3/3000x1200_Hero-Tall_NP._CB636191920_.jpg" 
    alt="amazon-banner" />

    {/* Product id, title, price, rating, image*/}
    {/* Product */}
    <div className="home__row">

      <Product 
      id="100" 
      title="iQOO Z5 5G (Mystic Space, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor" 
      price={"23,990"} 
      rating={5} 
      image="https://m.media-amazon.com/images/I/71wevQRS5qL._SL1196_.jpg"
      />

      <Product 
      id="101" 
      title="Apple iPhone 13 (128GB) - Midnight" 
      price={"71,990"} 
      rating={5} 
      image="https://m.media-amazon.com/images/I/61VuVU94RnL._SX522_.jpg"
      />
    </div>

    <div className="home__row">

      <Product 
      id="102" 
      title="SAMSUNG Galaxy S22 Smartphone, Factory Unlocked Android Cell Phone, 256GB, 8K Camera" 
      price={"75,999"} 
      rating={5} 
      image="https://m.media-amazon.com/images/I/71HUnJvHsbL._SX569_.jpg"
      />

      <Product 
      id="103" 
      title="MSI GeForce RTX 3090 Gaming X Trio 24G I 24GB GDDR6X I 384-bit PCI Express Gen 4 Gaming Graphic Card" 
      price={"2,14,999"} 
      rating={5} 
      image="https://m.media-amazon.com/images/I/81f6GdD799L._SX450_.jpg"
      />

      <Product 
      id="104" 
      title="Intel Core i9-12900K Desktop Processor 16 (8P+8E) Cores up to 5.2 GHz Unlocked LGA1700 600 Series Chipset 125W" 
      price={"65,999"} 
      rating={5} 
      image="https://m.media-amazon.com/images/I/61ZRFy6GZ4L._SY450_.jpg"
      />
    </div>

    </div>
    
  )
}

export default Home