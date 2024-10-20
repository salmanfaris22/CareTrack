
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const useUserListMutate = (user)=>{
    const  navigate =useNavigate()
    return useMutation({
        mutationFn:async()=>{
          const res =  await axios.post("http://localhost:8080/signup",user)
            return res.data;
        },
        onSuccess:(data)=>{
           
            localStorage.setItem("type",data.userType)
            // console.log(data);
            toast.success( String(data?.message))
            navigate("/")
        },
        onError:(data)=>{

            // console.log(data.response.data.error);
            toast.warn( String(data?.response?.data?.error))

        }
    })
} 



export const useLoginController = (user)=>{


const  navigate =useNavigate()
    return useMutation({
        mutationFn:async()=>{
          const res = await  axios.post("http://localhost:8080/logine",user,{
            withCredentials: true,
          })
           return res.data;
        },
        onSuccess:(data)=>{
            console.log(data.token);
            localStorage.setItem("type",data.userType)
            toast.success(data?.message)
            navigate("/")
        },
        onError:(data)=>{
                toast.warn(data?.response?.data.message);
        }
    })
    
} 