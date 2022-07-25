import { currentUser } from "../interface/auth";
import { LoginValues } from "../interface/loginValues";
import { RegisterValues } from "../interface/registerValues";
import axiosClient from "./axiosClient";





const authAPI = {
    login:(values:LoginValues)=>{
        return axiosClient.post<unknown, currentUser>("QuanLyNguoiDung/DangNhap",values)
    },
    register:(valuesregister:RegisterValues)=>{
        return axiosClient.post<unknown,currentUser>("QuanLyNguoiDung/DangKy",valuesregister)
    }
}

export default authAPI