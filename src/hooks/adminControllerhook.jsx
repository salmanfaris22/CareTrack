import axios from "axios"
import {  useMutation, useQuery, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";


export const AuthFuntion=()=>{
    const  navigat =useNavigate()
    if(localStorage.getItem("type")!="admin"){
        window.location.reload()
            navigat("/")

    }else{
        return
    }
}


export const useUserList=()=>{
    AuthFuntion()
    return useQuery({ 
        queryKey: ["user"],
         queryFn: async()=>{
 
            const res = await axios.get("http://localhost:8080/admin/users", {
                withCredentials: true,
              });
            return res.data
         },
       
     })
}



export const useAddUser = (user)=>{
    AuthFuntion()

    const  navigate =useNavigate()
        return useMutation({
            mutationFn:async()=>{
              const res = await  axios.post(`http://localhost:8080/admin/addUser`,user,{
                withCredentials: true,
              })
               return res.data;
            },
            onSuccess:(data)=>{


                toast.success(data?.message)
                navigate("/")
            },
            onError:(data)=>{
                    toast.warn("this mail alredy Used");
                    console.log(data);
            }
        })
        
    } 
export const useUserUpdateController = (id,user)=>{

    AuthFuntion()
    const  navigate =useNavigate()
        return useMutation({
            mutationFn:async()=>{
              const res = await  axios.put(`http://localhost:8080/admin/update/${id}`,user,{
                withCredentials: true,
              })
               return res.data;
            },
            onSuccess:(data)=>{
                console.log(data);

                toast.success(data?.message)
                navigate("/")
            },
            onError:(data)=>{
                    toast.warn(data);
                    console.log(data);
            }
        })
        
    } 

    export const useUserDeletController = (id)=>{
        const queryClient = useQueryClient();
        AuthFuntion()
        const  navigate =useNavigate()
            return useMutation({
                mutationFn:async()=>{
                  const res = await  axios.delete(`http://localhost:8080/admin/delete/${id}`,{
                    withCredentials: true,
                  })
                   return res.data;
                },
                onSuccess:(data)=>{
                    queryClient.invalidateQueries({
                        queryKey:["user"]
                    })
                    console.log(data.message);
                    toast.success(data?.message)
                    navigate("/")
                },
                onError:(data)=>{
                        // toast.warn(data?.response?.data.message);
                        console.log(data);
                }
            })
            
     } 