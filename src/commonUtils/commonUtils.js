import axios from 'axios'
import { userApiRoutes } from '../utils.js/ApiRoutes'
export const logout = async()=>{
    let token = localStorage.getItem('token')
    let result = await axios.post(userApiRoutes.logout,{},{
        headers:{
            "Authorization":`Bearer ${token}`,
            
        }
    })
    console.log(result)
    if(result){

        localStorage.setItem("token",null)
         return result.status
    }
}