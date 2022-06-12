import React, { useEffect } from 'react'
import CategoryTabs from './CategoryTabs'
import {useSelector,useDispatch} from 'react-redux'
import { getCategories } from '../redux/slices/categorySlice'
import { fetchAllItems, getAllItems } from '../redux/slices/itemSlice'

function Menu() {
    const dispatch = useDispatch()
    const categories = useSelector(getCategories)
    const items = useSelector(fetchAllItems)
    let itemLevel1 = items.data
    let itemLevel2 = itemLevel1.data
    let data1 = categories.data
    let data2 = data1.data
    console.log("CATTT",items)

    useEffect(() => {
        dispatch(getAllItems())
    }, []);
  return (
    <div>
        <CategoryTabs data={data2} items={itemLevel2} />
    </div>
  )
}

export default Menu