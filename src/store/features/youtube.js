import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    videos:[],
    currentPlaying:null,
    searchTerm:"",
    searchResult:[],
    nextpageToken:"",
    recommendedVideo:[]
};

const youtubeSlice= createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
    }
})

export default youtubeSlice.reducer;