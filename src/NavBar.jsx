import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import SearchIcon from "@mui/icons-material/Search"
import {FiShoppingCart} from 'react-icons/fi'
import { useStateValue } from './StateProvider'


import { getAuth, signOut } from "firebase/auth";
import app from './firebase'


const NavBar = () => {
  const [{ user , basket }] = useStateValue();
  
  const logOut = () => {
    const auth = getAuth(app);
    signOut(auth).then(() => {
      console.log(user)
      alert("Logged Out...");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


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

          
          <Link to={user===null ? "/login" : ""} className='nav__link'>
            <div onClick={user===null ? "" : logOut } className="smallm nav__option">
            <span className='nav__optionLineOne'>Hello, {user===null ? "Stranger" : user.email}</span>
            <span className='nav__optionLineTwo'>{user===null? "Sign In" : "Sign Out"}</span>
            </div>
          </Link>

          
          <Link to="/" className='nav__link hide'>
            <div className="nav__option">
            <span className='nav__optionLineOne'>Return</span>
            <span className='nav__optionLineTwo'>Orders</span>
            </div>
          </Link>

          
          <Link to="/" className='nav__link hide'>
            <div className="nav__option">
            <span className='nav__optionLineOne'>Your</span>
            <span className='nav__optionLineTwo'>Prime</span>
            </div>
          </Link>

          </div>

          
          <Link to='/checkout' className='nav__link'>
            <div className="nav__optionCart">
              
              <FiShoppingCart className='cart__icon'/>
              
              <span className='nav__optionLineTwo nav__optionCartItem'>{basket?.length}</span>
            </div>
          </Link>

        
        


        

    </nav>
  )
}

export default NavBar