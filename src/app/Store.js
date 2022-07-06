import { configureStore } from "@reduxjs/toolkit";

import  bookReducer  from "../fetaures/BooksSlice";

const store = configureStore({

    reducer:{
        bookReducer : bookReducer,
    }
})

export default store