import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import SearchIcon from "@mui/icons-material/Search"
import {FiShoppingCart} from 'react-icons/fi'

const NavBar = () => {
  return (
    <nav className='navbar'>

        
        <Link to="/">
        <img className='navbar__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
        </Link>
        

        
        <div className="navbar__search">
        <input type="text" className='navbar__searchinput' />
        <SearchIcon className='navbar__searchicon' />
        </div>
        

        
      
        <div className="header__nav">

          
          <Link to="/login" className='nav__link'>
            <div className="nav__option">
            <span className='nav__optionLineOne'>hello khalid</span>
            <span className='nav__optionLineTwo'>Sign In</span>
            </div>
          </Link>

          
          <Link to="/login" className='nav__link'>
            <div className="nav__option">
            <span className='nav__optionLineOne'>Return</span>
            <span className='nav__optionLineTwo'>Orders</span>
            </div>
          </Link>

          
          <Link to="/login" className='nav__link'>
            <div className="nav__option">
            <span className='nav__optionLineOne'>Your</span>
            <span className='nav__optionLineTwo'>Prime</span>
            </div>
          </Link>

          </div>

          
          <Link to='/checkout' className='nav__link'>
            <div className="nav__optionCart">
              
              <FiShoppingCart className='cart__icon'/>
              
              <span className='nav__optionLineTwo nav__optionCartItem'>0</span>
            </div>
          </Link>

        
        


        

    </nav>
  )
}

export default NavBar