import { CheckoutInterface } from '../interface/interfaceCheckout/CheckoutInterface';
import { AxiosError } from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookTicket from '../services/bookTicket';


interface Checkout{
    data:CheckoutInterface;
    loading:boolean;
    err?:string;
}

const initialState : Checkout ={
    data: {} as CheckoutInterface,
    loading:false,
    err:""
}

export const createCheckout = createAsyncThunk(
    "infoList/infoListCinema",
   async (LichChieuPhim:any) => {
      try {
        const data = await bookTicket.checkoutAPI(LichChieuPhim);
        return data
      } catch (error) {
        const err = (error as AxiosError).response?.data as any
        return err;
      }
   }
  )

const CheckoutSlice = createSlice({
    name:"checkout",
    initialState,
    reducers:{},


    extraReducers:(builder)=> {
        builder.addCase(createCheckout.pending,(state)=>{
            return {...state , isLoading:true}
        })
        builder.addCase(createCheckout.fulfilled,(state, {payload})=>{
            return {...state , isLoading:true, data:payload}
        })
        builder.addCase(createCheckout.rejected,(state, error)=>{
            return {...state , isLoading:true, error:error.payload as string}
        })
    },
})

export default CheckoutSlice.reducer