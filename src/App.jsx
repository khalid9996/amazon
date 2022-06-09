import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from './StateProvider';
import react, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from './firebase';


function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect (IMPORTANT)
  //piece of code which runs based on a given condition

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        //user is logged in
        console.log(`Logging in ${authUser}`);
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //user is logged out
        console.log(`Logging out`);
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

   return () => {
     //any Cleanup operation goes here
     unsubscribe();
   }

  }, [])

  console.log("User is >>>> ",user);

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
