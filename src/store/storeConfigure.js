import {configureStore} from "@reduxjs/toolkit"
import youtubeReducer from "../store/features/youtube.js"
const store= configureStore({
    reducer:{
        youtubeApp:youtubeReducer
    }
})


export default store;