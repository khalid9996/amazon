import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';


function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect <<<<<<<<<< POWERFUL
  //piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      //Any Cleanup operation go in here
      unsubscribe();
    }

  }, [])

  console.log(user);

  return (
    <>
    


    <BrowserRouter>
      <Routes>
    
      <Route path='/' element={<><NavBar/><Home/></>}></Route>
      <Route path='/login' element={<><Login/></>}></Route>
      <Route path='/checkout' element={<><NavBar/><Checkout/></>}></Route>
        
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
