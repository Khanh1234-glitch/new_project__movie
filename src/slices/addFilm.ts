import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddFilmInterface } from '../interface/interfaceAdmin/AddFilmInterface';
import addFilmAPI from '../services/addFilmAPI';


export interface AddFilm{
    data:AddFilmInterface,
    isLoading:boolean,
    error:string,
}

const initialState : AddFilm ={
    data:{} as AddFilmInterface,
    isLoading:false,
    error:""
}

export const createAddFilm= createAsyncThunk(
    "admin/addfilm",
   async (formData:any) => {
    try {
        const data = await addFilmAPI.addFilm(formData)
        alert("Thêm thành công")
        return data;
    } catch (error) {
        alert("Rất tiếc ! thêm thất bại")
        throw error
    }
   }
)

const AddFilmSlice = createSlice({
    name:"addFilm",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(createAddFilm.pending,(state)=>{
            return {...state, isLoading:true}
        })
        builder.addCase(createAddFilm.fulfilled,(state, {payload})=>{
            return {...state, isLoading:false, data:payload}
        })
        builder.addCase(createAddFilm.rejected,(state, error)=>{
            return {...state, isLoading:false, error:error.error.message as string}
        })
    },
})

export default AddFilmSlice.reducer
