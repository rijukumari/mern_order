import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Checkout from './pages/Checkout';
import SingleDetails from './pages/SingleDetails';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import AddProduct from './pages/AddProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
  import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/singup' element={<Singup/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/product/:id' element={<SingleDetails/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
