import { createSlice } from '@reduxjs/toolkit'





const initialState = {
  type: localStorage.getItem("type"),
  openadmin:false
}

export const userType = createSlice({
  name: 'type',
  initialState,
  reducers: {
    userGet:(state,action)=>{
        state.type =action.payload
        console.log(action.payload)
    },
    openAdmin:(state)=>{
        if(state.type=="admin"){
            state.openadmin = !state.openadmin
        }
      
        console.log(state.openadmin)
    },
  },
})


export const { userGet ,openAdmin} = userType.actions

export default userType.reducer