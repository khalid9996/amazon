import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

import SearchIcon from "@mui/icons-material/Search"

const NavBar = () => {
  return (
    <nav className='navbar'>

        {/* logo left img */}
        <Link to="/">
        <img className='navbar__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
        </Link>
        

        {/* search box */}
        <div className="navbar__search">
        <input type="text" className='navbar__searchinput' />
        <SearchIcon className='navbar__searchicon' />
        </div>
        

        {/* 3 Links */}
        <div className='tlink'>
        <div className="header__nav">
          {/* 1st LINK */}
          <Link to="/login" className='nav__link'>
            <div className="nav__option">
            <span className='nav__uptext'>hello khalid</span>
            <span>Sign In</span>
            </div>
          </Link>

          {/* 2st LINK */}
          <Link to="/login" className='nav__link'>
            <div className="nav__option">
            <span className='nav__uptext'>Return</span>
            <span>Orders</span>
            </div>
          </Link>

          {/* 3st LINK */}
          <Link to="/login" className='nav__link'>
            <div className="nav__option">
            <span className='nav__uptext'>Your</span>
            <span>Prime</span>
            </div>
          </Link>
          </div>

          {/* 4st LINK */}
          

        </div>
        


        {/* checkout Basket with number */}

    </nav>
  )
}

export default NavBar