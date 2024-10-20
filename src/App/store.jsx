import { configureStore } from '@reduxjs/toolkit'
import  userType from '../features/user/adminCheck'


export const store = configureStore({
  reducer: {
    user: userType,
  },
})