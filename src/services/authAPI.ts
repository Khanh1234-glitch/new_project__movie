import { RegisterValues } from './../interface/registerValues';
import { currentUser } from "../interface/auth";
import { LoginValues } from "../interface/loginValues";
import axiosClient from "./axiosClient";

const authAPI = {
    login:(values:LoginValues)=>{
        return axiosClient.post<unknown, currentUser>("QuanLyNguoiDung/DangNhap",values)
    },
    register:(values:RegisterValues)=>{
        return axiosClient.post<unknown,currentUser>("QuanLyNguoiDung/DangKy",values)
    }
}

export default authAPI