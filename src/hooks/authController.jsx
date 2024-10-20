
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userGet } from "../features/user/adminCheck";








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
            navigate("/logine")
        },
        onError:(data)=>{
            // console.log(data.response.data.error);
            toast.warn( String(data?.response?.data?.error))

        }
    })
} 




export const useLoginController = (user)=>{
    const dispatch = useDispatch();
    

const  navigate =useNavigate()
    return useMutation({
        mutationFn:async()=>{
          const res = await  axios.post("http://localhost:8080/logine",user,{
            withCredentials: true,
          })
           return res.data;
        },
        onSuccess:(data)=>{

            localStorage.setItem("type",data.userType)
            localStorage.setItem("token",data.token)
            dispatch(userGet(data.userType))


            toast.success(data?.message)
            navigate("/")
        },
        onError:(data)=>{
                toast.warn(data?.response?.data.message);
        }
    })
    
} 

export const useLogiut=()=>{
    
    return useQuery({ 
        queryKey: ["user"],
         queryFn: async()=>{
            // const token = Cookies.get('token'); 
            const res = await axios.get("http://localhost:8080/admin/logout", {
                withCredentials: true,
              });
            return res.data
         },
       
     })
}
