import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {MovieList} from "../slices/moviesList";
import { RootState } from "../store";
import { useEffect } from "react";

import IMG from "./../img/download.png";
import { createStyles } from "@mantine/core";

const useState = createStyles(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  container__card: {
    margin: "100px 0 0 50px ",
  },
  card: {
    width: "300px",
  },
  movieName: {
    display: "flex",
    color: "black",
    fontWeight:500,
  },
  descripMovie: {
    color: "#757575",
    overflow: "hidden",
    display: "-webkit-box",
    opacity: 1,
    margin: "0 0 16px 0",
    visibility: "visible",
    lineHeight: "22px",
    textOverflow: "ellipsis",
  },
  title__card: {
    position: "relative",
  },
  span__nameMovie: {
    display: "inline-block",
    alignItems: "center",
    margin: " 10px 8px 0 0 ",
    padding: "5px 5px",
    minWidth:"33px",
    borderRadius:"4px",
    textAlign:"center",
    backgroundColor: "#fb4226",
    color: "black",
    fontWeight:500,
    height: "50%",
  },
}));


const CarouselItem = () => {
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.movieList,
  );
  const { classes, cx } = useState();
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(MovieList());
  }, []);

  
  return (
    <div  className="container">
    <div className={classes.container}>
      {data &&data.map((MovieList) => {
        return (
          <div id="lichchieu" className={classes.container__card} >
            <div className={classes.card}>
              <div className="content__card">
                <div className="card__img">
                  <img
                    style={{ borderRadius: "30px" }}
                    width={"100%"}
                    height={"360px"}
                    src={MovieList.hinhAnh}
                    alt=""
                  />
                </div>
                <div className={classes.title__card}>
                  <div className={classes.movieName}>
                    <span className={classes.span__nameMovie}>C18</span>
                    <h3>{MovieList.tenPhim}</h3>
                  </div>
                  <div className="descripMovie">
                    <p className={classes.descripMovie}>{MovieList.moTa}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default CarouselItem;
