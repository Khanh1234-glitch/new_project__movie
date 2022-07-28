
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { createinfoSystem } from "../slices/infoSystem";
import { Tabs } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";
import { useParams } from "react-router-dom";
const TableListMovie = () => {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.infoSystem
  );
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(createinfoSystem());
  }, []);
  const { TabPane } = Tabs;
  type TabPosition = "left" | "right" | "top" | "bottom";
  const [tabPosition] = useState<TabPosition>("left");
  console.log("Data13",data);

  return (
    <>
      <div id="cumrap" className="container">
        <Tabs tabPosition={tabPosition}>
          {data?.map((infoSystem, index) => {
            return (
              <TabPane
                tab={
                  <img
                    src={infoSystem.logo}
                    className="rounded-full"
                    width={"50px"}
                  />
                }
                key={index}
              >
                <Tabs tabPosition={tabPosition}>
                </Tabs>
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default TableListMovie;
