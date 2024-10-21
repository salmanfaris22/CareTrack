import axios from "axios";
import {  useMutation, useQuery, useQueryClient } from "react-query";


import { toast } from "react-toastify";

export const useApoimentSet = (user) => {

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const res = await axios.post("http://localhost:8080/user/appoiment",user,{withCredentials: true,});
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey:["appoiment"]
    })
      toast.success(String(data?.message));
    },
    onError: (data) => {
      toast.warn(String(data?.response?.data?.message));
    },
  });
};


export const useDateList=()=>{
    
    return useQuery({ 
        queryKey: ["appoiment"],
         queryFn: async()=>{
            // const token = Cookies.get('token'); 
            const res = await axios.get(" http://localhost:8080/dates");
            return res.data
         },
       
     })
}
//

export const useGetMyApoiments=()=>{
    
    return useQuery({ 
        queryKey: ["appoiment"],
         queryFn: async()=>{
            // const token = Cookies.get('token'); 
            const res = await axios.get("http://localhost:8080/user/getuserAppoiment",  {
                withCredentials: true,
              });
            return res.data
         },
       
     })
}




export const useDeletApoiment = () => {

    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (user) => {
        const res = await axios.post("http://localhost:8080/user/cancelAppiment",user,{withCredentials: true,} );
        return res.data;
      },
      onSuccess: (data) => {

        queryClient.invalidateQueries({
          queryKey:["appoiment"]
        })
        toast.success(String(data?.message));
      },
      onError: (data) => {
        console.log(data);
       
        toast.warn(String(data?.response?.data?.message));
      },
    });
  };