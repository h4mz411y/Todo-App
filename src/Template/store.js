import { configureStore } from '@reduxjs/toolkit'
import  AddItemReducer  from './addItem'


export const store = configureStore({
  reducer: {
    AddItemReducer:AddItemReducer
  }, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

})
