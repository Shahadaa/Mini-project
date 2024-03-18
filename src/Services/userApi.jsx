import { UserInstance } from "../../Axios/axiosInstance"

export const signup =(value)=>{
    return UserInstance.post('/signup',{...value})
}