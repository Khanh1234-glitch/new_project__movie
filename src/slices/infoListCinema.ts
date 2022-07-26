import { AxiosError } from 'axios';
import { infoListCinema as infoCinema } from './../interface/infoListCinema';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import manamentCinemaAPI from '../services/manamentCineAPI';

interface infoListCinema {
    data:infoCinema [],
    isLoading:boolean,
    error: string,
}

const initialState : infoListCinema=({
    data:[],
    isLoading:false,
    error:"",
})

// thunk action

export const createInfoListCinema = createAsyncThunk(
    "infoCinema/infoListCinema",
   async () => {
    try {
        const data = await manamentCinemaAPI.infoListCinema();
        return data;
    } catch (error) {
        const err = (error as AxiosError).response?.data as any
        throw err.content;
    }
   }
)

 const infoListCinemaSlice = createSlice({
    name:"infoListCinema",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(createInfoListCinema.pending,(state)=>{
            return {...state, isLoading:true}
        })
        builder.addCase(createInfoListCinema.fulfilled,(state, action)=>{
            return {...state, isLoading:true, data:action.payload}
        })
        builder.addCase(createInfoListCinema.rejected,(state, {error})=>{
            return {...state, isLoading:true, error:error.message as string}
        })
    },
})

export default infoListCinemaSlice.reducer;