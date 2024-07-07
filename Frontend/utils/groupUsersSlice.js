import { createSlice } from "@reduxjs/toolkit";


const groupUserSlice = createSlice({
    name: 'groupUsers',
    initialState: {
        items:[]
    },
    reducers: {
        getUsers: ()=>{
            addUsers: (state,action)=>{
                state.items.push(action.payload);
            }
        }
    }
})

export const {getUsers} = groupUserSlice.actions;
export default groupUserSlice.reducer;