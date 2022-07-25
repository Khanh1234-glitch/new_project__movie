import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieBanner } from "../slices/movies";
import { RootState } from "../store";
import IMG from "./../img/download.png";
import { Carousel } from "react-bootstrap";
import { Movie } from "../interface/movie";

const CarouselComponent = () => {
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.movie
  );
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getMovieBanner());
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <Carousel>
        {data && data.map((movie: Movie) => {
          return (
            <Carousel.Item interval={1000} >
              <img
                className="d-block w-100"
                src={movie.hinhAnh}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

