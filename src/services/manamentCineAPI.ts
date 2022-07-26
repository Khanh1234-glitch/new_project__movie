import { infoListCinema } from '../interface/infoListCinema';
import { SystemCinema } from '../interface/systemCinema';
import axiosClient from "./axiosClient"


const manamentCinemaAPI ={
    getInfoSystem:()=>{
        return  axiosClient.get<unknown,SystemCinema[] >("QuanLyRap/LayThongTinLichChieuHeThongRap");
    },
    infoListCinema:()=>{
        return axiosClient.get<unknown,infoListCinema[]>(`QuanLyRap/LayThongTinLichChieuPhim`);
    }
}

export default manamentCinemaAPI