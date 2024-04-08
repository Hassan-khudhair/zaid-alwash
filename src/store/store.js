import  reducer  from "./courses/coursesSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer:{
        courses: reducer 
    },
})