import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Moviecard from "../components/Moviecard";
import { useSelector, useDispatch } from "react-redux";
import { getPopularMovie, getPlayingMovie, getUpcomingMovie, getTopRatedMovie } from "../store/actions/getAction";
import CarouselCard from "../components/Carousel";

function Home() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function onSearchSubmit(payload) {
    if (payload.results !== undefined) {
      setInput(payload.results);
    }
  }
  console.log(onSearchSubmit);

  const popularmovie = useSelector((state) => state.popularmovie);
  const playingmovie = useSelector((state) => state.playingmovie);
  const upcomingmovie = useSelector((state) => state.upcomingmovie);
  const topratedmovie = useSelector((state) => state.topratedmovie);

  useEffect(() => {
    dispatch(getPopularMovie());
    dispatch(getPlayingMovie());
    dispatch(getUpcomingMovie());
    dispatch(getTopRatedMovie());
  }, [dispatch]);

  return (
    <>
      <Navbar onSubmit={onSearchSubmit} />
      <CarouselCard />
      {!input ? (
        <>
          <Moviecard files={popularmovie} title={"Popular Movie"} isLimit={true} />
          <Moviecard files={playingmovie} title={"Now Playing Movie"} isLimit={true} />
          <Moviecard files={upcomingmovie} title={"Up Coming Movie"} isLimit={true} />
          <Moviecard files={topratedmovie} title={"Top Rated Movie"} isLimit={true} />
        </>
      ) : (
        <Moviecard files={input} title={`Search Movie`} isLimit={false} />
      )}
    </>
  );
  // }
}

export default Home;
