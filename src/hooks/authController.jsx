
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userGet } from "../features/user/adminCheck";








export const useUserListMutate = (user)=>{
    const  navigate =useNavigate()
    const dispatch = useDispatch();
    


    return useMutation({
        mutationFn:async()=>{
          const res =  await axios.post("http://localhost:8080/signup",user,{
            withCredentials: true,
          })
            return res.data;
        },
        onSuccess:(data)=>{
            localStorage.setItem("type",data.userType)
            localStorage.setItem("token",data.token)
            dispatch(userGet(data.userType))


            toast.success(data?.message)
            localStorage.setItem("type",data.userType)
            console.log(data);
            toast.success( String(data?.message))
            navigate("/")
        },
        onError:(data)=>{
            

            if(String(data.response.data.error).length>10){
                const err = data.response.data.error.split(" ")[1].split(".")
                toast.warn( err[1] + "requred")
            }else{
                toast.warn( String(data?.response?.data?.error))
            }
           

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
    const queryClient = useQueryClient();
    return useQuery({ 
        queryKey: ["user"],

         queryFn: async()=>{
            // const token = Cookies.get('token'); 
            const res = await axios.get("http://localhost:8080/admin/logout", {
                withCredentials: true,
              });
            return res.data
         },
         onSuccess: (data) => {

            queryClient.invalidateQueries({
              queryKey:["appoiment"]
            })
            toast.success(String(data?.message));
          },
       
     })
}



export function authChack(){
    if( !localStorage.getItem("type")){
        toast.warn("pleas logine")
        return
    }
}