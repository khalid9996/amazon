import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'

function App() {
  return (
    <>
    


    <BrowserRouter>
      <Routes>
    
      <Route path='/' element={<><NavBar/><Home/></>}></Route>
      <Route path='/login' element={<><h1>login</h1></>}></Route>
      <Route path='/checkout' element={<><NavBar/><h1>checkout</h1></>}></Route>
        
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
