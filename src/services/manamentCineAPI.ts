import { SystemCinema } from '../interface/systemCinema';
import axiosClient from "./axiosClient"


const manamentCinemaAPI ={
    getInfoSystem:()=>{
        return  axiosClient.get<unknown,SystemCinema[] >("QuanLyRap/LayThongTinLichChieuHeThongRap");
    },
    
}

export default manamentCinemaAPI