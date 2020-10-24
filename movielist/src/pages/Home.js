import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Moviecard from "../components/Moviecard";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../store/actions/getAction";
import CarouselCard from "../components/Carousel";

import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

import useFetch from "../hooks/useFetch";

function Home() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("primary");
  const [title, setTitle] = useState("Popular Movie");

  function onSearchSubmit(payload) {
    setInput(payload.results);
    setTitle("Search Movie");
  }

  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=464b6412840269fe91e87ba7d6958784&language=en-US`;
  const [data, loading] = useFetch(apiUrl);
  const chips = data.genres;

  const handleClick = () => {
    if (status === "primary") {
      setStatus("secondary");
    } else {
      setStatus("primary");
    }
  };

  const files = useSelector((state) => {
    return state.files;
  });

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <>
        <Navbar onSubmit={onSearchSubmit} />
        <CarouselCard />
        <div className="chipPosition">
          {chips.map((file) => {
            return (
              <div className="chipItem">
                <Chip color={status} label={file.name} onClick={handleClick} deleteIcon={<DoneIcon />} />
              </div>
            );
          })}
        </div>
        <h1 className="title">{title}</h1>
        <Moviecard files={input ? input : files} />
      </>
    );
  }
}

export default Home;
