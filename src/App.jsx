import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Order from './Pages/Order'
import FilterData from './Pages/FilterData'
import ProductDetails from './Pages/ProductDetails'

function App() {
const[order, setOrder] = useState(null)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/Shop" element={<Shop/>}/>
      <Route path ="/Cart" element={<Cart/>}/>
      <Route path ="/Checkout" element={<Checkout setOrder = {setOrder}/>}/>
      <Route path ="/order-confirmation" element={<Order order = {order}/>}/>
      <Route path ="/filter-data" element={<FilterData/>}/>
      <Route path ="/product/:id" element={<ProductDetails/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter> 
    </>
  )
}

export default App
