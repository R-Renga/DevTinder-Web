import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedSlice from "./feedSlice";
import connectionSlice from "./connectionSlice";
import requestsSlice from "./requestsSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:feedSlice,
        connections : connectionSlice,
        request:requestsSlice
    }
})

export default appStore