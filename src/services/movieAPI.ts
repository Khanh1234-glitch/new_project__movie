import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { Movie } from "../interface/movie";
import axiosClient from "./axiosClient"
const movieAPI = {
    getMovieBanner: ()=>{
        return axiosClient.get<unknown, Movie[]>("QuanLyPhim/LayDanhSachBanner");
    },
    getMovieList:()=>{
        return axiosClient.get<unknown, Movie[]>("QuanLyPhim/LayDanhSachPhimPhanTrang",{params:{
            soTrang:1,
        }});
    },
}

export default movieAPI