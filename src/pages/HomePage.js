import React, { useEffect } from 'react'

import Header from '../components/Header'
import Menu from '../components/Menu'
import {useDispatch,useSelector} from 'react-redux'
import { getAllCategories, getCategories } from '../redux/slices/categorySlice'
function HomePage() {
    const dispatch = useDispatch()
    const categories = useSelector(getCategories)
    console.log("Categories",categories)
  useEffect(() => {
  if(categories.status == 'idle'){
    dispatch(getAllCategories())
  }
  }, []);
    
  return (
    <div>
        <Header />
        <Menu  />

    </div>
  )
}

export default HomePage