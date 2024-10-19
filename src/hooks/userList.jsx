import axios from "axios";
import { useMutation, useQuery } from "react-query";


export const useUserList=()=>{

    return useQuery({ 
        queryKey: ["user"],
         queryFn: async()=>{
            const res = await axios.get("http://localhost:8080/signup")
            return res.data
         },
       
     })
}

export const useUserListMutate = (user)=>{

    return useMutation({
        mutationFn:async()=>{
            axios.post("http://localhost:8080/signup",user)
        }
    })
} 