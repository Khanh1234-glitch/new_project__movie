import React, { Component, useEffect, useState } from "react";
import styles from "./Detail.module.css";
import './../../index.css'
import type { RadioChangeEvent } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { createInfoListCinema } from "../../slices/infoListCinema";

const { TabPane } = Tabs;

type TabPosition = 'left' | 'right' | 'top' | 'bottom';
const Detail = () => {
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.infoListCinema
  );
  const dispatch = useDispatch<any>();
    useEffect(()=>{
      dispatch(createInfoListCinema())
    },[])
    console.log("id",data);
    
    const [tabPosition, setTabPosition] = useState<TabPosition>('left');
  return (
    <div style={{ backgroundImage: "url(https://picsum.photos/200)" }}>
      <div className={styles.App} style={{ display: "flex" }}>
        <div className={styles.box1}>
          <div className="container cols-12">
            <div className={styles.row}>
              <div className="col-sm-4">
                <img
                  src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/295385136_1515356865547747_3523647905096852001_n.jpg?stp=dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=xdhIyhC6-5EAX9TV79y&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT9vJ97fdW_b45Hhz1SXoandcujn7gx-Hh7crf2rU_XDww&oe=62E54B6D"
                  alt=""
                />
              </div>
              <div className="col-sm-4">
                <p>Tên phim</p>
                <p>Mô tả</p>
              </div>
              <div className="circle firchow">
                <div className="c100 p50 big">
                  <span>50%</span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="container tab__detail mt-5">
        <Tabs tabPosition={tabPosition}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
        </div>
        </div>
      
      
      </div>

    </div>
  );
};

export default Detail;
