
import { infoListCinema } from '../interface/interfaceDetail/infoListCinema';
import { SystemCinema } from '../interface/tableListMovie/systemCinema';
import axiosClient from "./axiosClient"


const manamentCinemaAPI ={
    getInfoSystem:()=>{
        return  axiosClient.get<unknown,SystemCinema[] >(`QuanLyRap/LayThongTinLichChieuHeThongRap`);
    },
    infoList:(maPhim:any)=>{
        return axiosClient.get<unknown,infoListCinema>(`QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    },
   
}

export default manamentCinemaAPI