import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import { createCheckout } from "../../slices/checkout";
import { RootState } from "../../store";
import style from './Checkout.module.css'
const Checkout = () => {
  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const { data, loading, err} = useSelector(
    (state:RootState ) => state.CheckoutStore
  )
  console.log(data);
const dispatch = useDispatch<any>();
const param = useParams()
useEffect(() => {
    dispatch(createCheckout(param.maLichChieu));
  }, []);
  console.log(param.maLichChieu);

  
  if (!localStorage.getItem("user")) {
    return <Navigate to="/sign__in" />;
  }
  console.log(data);
  return (
    <div>
      <div className=" mt-5">
        <div className="row">
          <div className="col-8 d-flex justify-content-center">
            <div className={style.screen}>
                <div className="text-center mt-3">
                    Màn hình
                </div>
            </div>
          </div>
          <div className="col-4">
            <h3 className="text-success text-center text-2xl">0 đ</h3>
            <hr />
            <h3>{data.thongTinPhim.tenPhim}</h3>
            <p>Địa điểm: {data.thongTinPhim.diaChi} </p>
            <p>Ngày chiếu</p>
            <hr />
            <div className="row">
              <div className="col-10">
                <span className="text-danger">Ghế</span>
              </div>
              <div className="col-2 text-success">0 đ</div>
            </div>
            <hr />
            <i>Email</i>
            <br />
            {currentUser.email}
            <hr />
            <div className="mt-5">
              <i>Phone</i>
              <br />
              {currentUser.soDt}
            </div>
            <div className="mb-0 h-100 align-items-center flex-column d-flex justify-content-end">
                <div className="text-white w-100 text-center p-2 rounded font-weight-bold" style={{background:"linear-gradient(to left,#fb4226,#ce3017 100%)"}}>Đặt vé</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
