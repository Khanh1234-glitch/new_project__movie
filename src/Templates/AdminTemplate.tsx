import React, { useState } from "react";
import { Tabs } from "antd";
import { Link, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Film from "../Pages/Admin/Film/Film";
import ShowTime from "../Pages/Admin/ShowTime/ShowTime";

const { TabPane } = Tabs;

const AdminTemplate = () => {
  return (
    <div className="card-container" style={{marginTop:"100px"}}>
      <Tabs type="card">
        <TabPane tab={<Link to="/admin/film">Film</Link>} key="2">
            <Film/>
        </TabPane>
        <TabPane tab={<Link to="/admin/showtime">Show time</Link>} key="3">
            <ShowTime/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AdminTemplate;
