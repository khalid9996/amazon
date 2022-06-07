import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import Checkout from './Checkout';


function App() {
  return (
    <>
    


    <BrowserRouter>
      <Routes>
    
      <Route path='/' element={<><NavBar/><Home/></>}></Route>
      <Route path='/login' element={<><h1>login</h1></>}></Route>
      <Route path='/checkout' element={<><NavBar/><Checkout/></>}></Route>
        
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
