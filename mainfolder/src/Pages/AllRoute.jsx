import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from './Cart'
import Checkout from './Checkout'
import Home from './Home'
import Login from './Login'
import Product from './Product'
import Register from './Register'
export default function AllRoute() {
  return (
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
            <Route path='/cart' element={<Cart/>} ></Route>
            <Route path='/product' element={<Product/>} ></Route>

        </Routes>

  )
}
