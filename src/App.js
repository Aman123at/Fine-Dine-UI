import { useSelect } from '@mui/base'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/slices/userSlice';
import AuthRoutes from './routes/AuthRoutes'
import UnAuthRoutes from './routes/UnAuthRoutes'



const App=()=> {
  const user = useSelector(getUsers)
  // const dispatch = useDispatch()
  // let users = false
//  useEffect(()=>{
//   dispatch(getUsers)
//  },[])
  return  (
    <>
    {(user && user.data!=null) ? <AuthRoutes /> : <UnAuthRoutes  />}
    </>
  )
}

export default App