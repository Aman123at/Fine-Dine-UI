import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { categoryApiRoutes } from "../../utils.js/ApiRoutes";




export const getAllCategories = createAsyncThunk(
    "getAllCategories",
    async ()=>{
        const response = await axios.get(categoryApiRoutes.getAllCategory,{
            headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
            
            }
          })
          return response.data;
    }
)
  

const initialState ={
    
    categories:{status:'idle',data:[]}
}
export const categorySlice = createSlice({
    name:'categories',
    initialState,
    reducers:{
        clearCategoryStates:(state)=>initialState,
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
      
        builder.addCase(getAllCategories.pending, (state) => {
            state.categories.status = "loading";
          });
          builder.addCase(getAllCategories.fulfilled, (state, { payload }) => {
            state.categories.status = "finished";
            
            
            state.categories.data = payload
          });
          builder.addCase(getAllCategories.rejected, (state) => {
            state.categories.status = "error";
          });
    }
})

export const {clearCategoryStates} = categorySlice.actions;

// export const getTodos=(state)=>state.todos?.todos
export const getCategories=(state)=>state?.categories?.categories
export default categorySlice.reducer;