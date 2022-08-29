import { createSlice } from '@reduxjs/toolkit'



let initialState = {
  NumberItem: 0,
  allItem:[]
}


  if(window.localStorage.TodoListStorage){
    initialState= JSON.parse(window.localStorage.TodoListStorage)  
  }
  


export const AddItemReducer = createSlice({
  name: 'AddNewItem',
  initialState,
  reducers: {
    addItem: (state, action) => {
        state.NumberItem=state.NumberItem+=1;
        state.allItem=[action.payload,...state.allItem]
    },
    RemoveItem: (state, action) => {
        state.NumberItem=state.NumberItem-=1;
        state.allItem=state.allItem.filter((a,i)=>(a.id!=action.payload))
    },
    clearAllData: (state) => {
          state.NumberItem=0
          state.allItem=[]
    } ,
    EditeStatus:(state, action) =>{

      state.allItem=state.allItem.map((a,i)=>
        {
            if(a.id==action.payload){
            return {...a,status:'complete'}
          }
            else{
              return a
            }
        }
      )
    } 
  }
})

// Action creators are generated for each case reducer function
export const {  addItem,RemoveItem,clearAllData,EditeStatus } = AddItemReducer.actions

export default AddItemReducer.reducer

