import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cartApiRoutes, categoryApiRoutes } from "../../utils.js/ApiRoutes";




export const getAllCartItems = createAsyncThunk(
    "getAllCartItems",
    async ()=>{
        const response = await axios.get(cartApiRoutes.getCart,{
            headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
            
            }
          })
          return response.data;
    }
)
  

const initialState ={
    
    carts:{status:'idle',data:[]}
}
export const cartSlice = createSlice({
    name:'carts',
    initialState,
    reducers:{
        clearCartStates:(state)=>initialState,
        // addTodo:(state,{payload})=>{
        //     state.todos.push(payload)
        // },
        // deleteTodo:(state,{payload})=>{
        //     console.log("DELETE TODO",payload)
        //    state.todos = state.todos.filter((val)=>val.id != payload)
        // },
        // updateTodo:(state,{payload})=>{
        //     console.log("UPDATE TODO",payload)
        //     state.todos = state.todos.map((val)=>{
        //         if(val.id == payload.id){
        //             val = payload
        //             return val
        //         }
        //         return val
        //     })
        // }
        // setTableNo:(state,{payload})=>{
        //     state.tableNo = payload
        // }
    },
    extraReducers:(builder)=>{
      
        builder.addCase(getAllCartItems.pending, (state) => {
            state.carts.status = "loading";
          });
          builder.addCase(getAllCartItems.fulfilled, (state, { payload }) => {
            state.carts.status = "finished";
            
            
            state.carts.data = payload
          });
          builder.addCase(getAllCartItems.rejected, (state) => {
            state.carts.status = "error";
          });
    }
})

export const {clearCartStates} = cartSlice.actions;

// export const getTodos=(state)=>state.todos?.todos
export const getCarts=(state)=>state?.carts?.carts
export default cartSlice.reducer;