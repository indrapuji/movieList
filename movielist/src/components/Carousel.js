import React from "react";
import { Carousel } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

export default function CarouselCard() {
  const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&page=1`;
  const [data, loading] = useFetch(apiUrl);
  const files = data.results;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="carousel">
        <Carousel>
          {files.map((file, idx) => {
            return (
              <Carousel.Item key={idx} interval={1000}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${file.backdrop_path}`} alt={`${idx} Slide`} />
                </div>
                <Carousel.Caption>
                  <h3>{file.title}</h3>
                  <p>{file.overview}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
