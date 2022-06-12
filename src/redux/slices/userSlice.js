import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { categoryApiRoutes, userApiRoutes } from "../../utils.js/ApiRoutes";

export const loginUser = createAsyncThunk(
    "loginUser",
     async (params) => {
      const response = await axios.post(userApiRoutes.login,params,{
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
        
        }
      })
      return response.data;
    }
  );



  

const initialState ={
    
    user:{status:'idle',data:null},
    tableNo:0
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        clearUserStates:(state)=>initialState,
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
        setTableNo:(state,{payload})=>{
            state.tableNo = payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending, (state) => {
            state.user.status = "loading";
          });
          builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.user.status = "finished";
            
            localStorage.setItem("token",payload.token)
            state.user.data = payload.user
          });
          builder.addCase(loginUser.rejected, (state) => {
            state.user.status = "error";
          });
      
    }
})

export const {setTableNo,clearUserStates} = userSlice.actions;

// export const getTodos=(state)=>state.todos?.todos
export const getUsers=(state)=>state?.users?.user
export const getTableNo=(state)=>state?.users?.tableNo
export default userSlice.reducer;