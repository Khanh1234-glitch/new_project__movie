
import { Movie } from "../interface/movie";
import axiosClient from "./axiosClient"


const movieAPI ={
    getMovieBanner: ()=>{
        return axiosClient.get<unknown, Movie[]>("QuanLyPhim/LayDanhSachBanner");
    },
    getMovieList:()=>{
        return axiosClient.get<unknown, Movie[]>("QuanLyPhim/LayDanhSachPhimPhanTrang");
    },
}

export default movieAPI