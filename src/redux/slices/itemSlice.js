import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {  itemApiRoutes} from "../../utils.js/ApiRoutes";




export const getAllItems = createAsyncThunk(
    "getAllItems",
    async ()=>{
        const response = await axios.get(itemApiRoutes.getAllItems,{
            headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
            
            }
          })
          return response.data;
    }
)
  

const initialState ={
    
    items:{status:'idle',data:[]}
}
export const itemSlice = createSlice({
    name:'items',
    initialState,
    reducers:{
        clearItemStates:(state)=>initialState,
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
      
        builder.addCase(getAllItems.pending, (state) => {
            state.items.status = "loading";
          });
          builder.addCase(getAllItems.fulfilled, (state, { payload }) => {
            state.items.status = "finished";
            
            
            state.items.data = payload
          });
          builder.addCase(getAllItems.rejected, (state) => {
            state.items.status = "error";
          });
    }
})

export const {clearItemStates} = itemSlice.actions;

// export const getTodos=(state)=>state.todos?.todos
export const fetchAllItems=(state)=>state?.items?.items
export default itemSlice.reducer;