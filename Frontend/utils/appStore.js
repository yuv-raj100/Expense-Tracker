import { configureStore } from "@reduxjs/toolkit";
import groupUsersReducer from "./groupUsersSlice";

const appStore = configureStore({
    reducer: {
        userList: groupUsersReducer
    }
});


export default appStore;