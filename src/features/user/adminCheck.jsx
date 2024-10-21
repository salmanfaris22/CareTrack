import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { format, addDays } from 'date-fns';




const today = new Date();
const initialState = {
  type: localStorage.getItem("type"),
  openadmin:false,
  time:null,
  apoiment:null,
  slot:null,
  doctor_id:1,
  datesSet:Array.from({ length: 7 }, (_, index) => 
    format(addDays(today, index), 'yyyy-MM-dd')  // Format the date to 'yyyy-MM-dd'
  ),
}

export const userType = createSlice({
  name: 'type',
  initialState,
  reducers: {
    userGet:(state,action)=>{
        state.type =action.payload

    },
    openAdmin:(state)=>{

        if(state.type=="admin"){
            state.openadmin = !state.openadmin
        }
      
    },
    timessssGeting:(state,action)=>{
            console.log(action);
        if(action.payload==null){
            state.time=null
            state.slot=null
        }else{
            state.time=action.payload.day.date_time
            state.slot=action.payload.day.slot
        }
    },
    apoimentDemo:(state,action)=>{

        
     
       if (state.time!=null && state.slot != null){
        state.apoiment={
            ... action.payload,
            date:state.time,
           age:Number(action.payload.age),
           doctor_id:Number(action.payload.doctor_id),
            slot:(state.slot)
         }
       }else{
        toast.warn("select the slot")
       }
    },
    docterSelect:(state,action)=>{
     
        state.doctor_id=action.payload
        console.log(state.doctor_id);
    }
  },
})


export const { userGet ,openAdmin,timessssGeting,apoimentDemo,docterSelect} = userType.actions

export default userType.reducer