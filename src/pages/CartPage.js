import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Carts from '../components/Carts'
import { getAllCartItems, getCarts } from '../redux/slices/cartSlice'
function CartPage() {
    const dispatch = useDispatch()
    const carts = useSelector(getCarts)
    let cartL1 = carts.data
    let cartL2 = cartL1.data
    console.log(carts)
    useEffect(() => {
        if(carts.status == 'finished'){

            dispatch(getAllCartItems())
        }
    }, []);
  return (
    <div>
        {cartL2.map((val,index)=>
        <Carts data={val} key={index} />
        )}

        <button>Place Order</button>
    </div>
  )
}

export default CartPage