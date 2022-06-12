import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import CartPage from '../pages/CartPage'
import HomePage from '../pages/HomePage'
const AuthRoutes= ()=> {
  return (
    <BrowserRouter>
    <Routes>
        
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
  
    
  )
}

export default AuthRoutes;