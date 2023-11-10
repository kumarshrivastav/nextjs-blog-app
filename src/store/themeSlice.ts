import {createSlice} from "@reduxjs/toolkit"

const initialState={
    theme:"light"
}

export const themeSlice=createSlice({
    name:"themeslice",
    initialState,
    reducers:{
        setTheme:(state,action)=>{
            state.theme=action.payload
        },
        setToggle:(state)=>{
            console.log('setToggle Clicked')
           state.theme==="light"?(state.theme="dark"):(state.theme="light")
        }
    }
})

export const {setToggle}=themeSlice.actions
export default themeSlice.reducer