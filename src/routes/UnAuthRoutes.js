import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Admin from '../pages/Admin'
import QRpage from '../pages/QRpage'
const UnAuthRoutes=()=> {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/admin' element={<Admin />} />
    <Route exact path='/' element={<QRpage />} />

    </Routes>
    </BrowserRouter>
    
  )
}

export default UnAuthRoutes