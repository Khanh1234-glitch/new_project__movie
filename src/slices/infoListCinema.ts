import { currentUser } from './../interface/auth';
import { AxiosError } from 'axios';
import { infoListCinema as infoCinema } from './../interface/infoListCinema';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import manamentCinemaAPI from '../services/manamentCineAPI';

interface infoListCinema {
    data:infoListCinema,
    isLoading:boolean,
    error: string,
}

const initialState : infoListCinema=({
    data:{} as infoListCinema,
    isLoading:false,
    error:"",
})

// thunk action

export const createInfoListCinema = createAsyncThunk(
    "infoCinema/infoListCinema",
   async (maPhim: any) => {
    try {
        const data = await manamentCinemaAPI.infoListCinema(maPhim);
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
          return {...state, isLoading:true, error:""}
        })
        builder.addCase(createInfoListCinema.fulfilled,(state, {payload})=>{
          return {...state, isLoading:false,infoListCinema:payload }
        })
        builder.addCase(createInfoListCinema.rejected,(state, {error})=>{
          return {...state, isLoading:false,error:error.message as string }
        })
      },
})

export default infoListCinemaSlice.reducer;