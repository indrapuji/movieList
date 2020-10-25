import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Moviecard from "../components/Moviecard";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../store/actions/getAction";
import CarouselCard from "../components/Carousel";

// import Chip from "@material-ui/core/Chip";
// import useFetch from "../hooks/useFetch";
// import Loading from "../components/Loading";

function Movie() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("Popular Movie");

  function onSearchSubmit(payload) {
    if (payload.results !== undefined) {
      setInput(payload.results);
      setTitle("Search Movie");
    }
    console.log(payload.results);
  }

  const files = useSelector((state) => {
    return state.files;
  });

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  // const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=464b6412840269fe91e87ba7d6958784&language=en-US`;
  // const [data, loading] = useFetch(apiUrl);
  // const chips = data.genres;

  // const handleClick = (index) => {
  //   setChipsArr(
  //     chipsArr.map((x, idx) => {
  //       if (idx === index) {
  //         if (x === "primary") return "secondary";
  //         else return "primary";
  //       } else return x;
  //     })
  //   );
  // };

  // useEffect(() => {
  //   if (data.genres) setChipsArr(data.genres.map(() => "primary"));
  // }, [data]);
  // const [chipsArr, setChipsArr] = useState([]);

  // if (loading) {
  //   return <Loading></Loading>;
  // } else {
  return (
    <>
      <Navbar onSubmit={onSearchSubmit} />

      <CarouselCard />
      {/* <div className="chipPosition">
          {chips.map((file, idx) => {
            return (
              <div className="chipItem">
                <Chip color={chipsArr[idx]} label={file.name} onClick={() => handleClick(idx)} size="small" />
              </div>
            );
          })}
        </div> */}
      <h1 className="title">{title}</h1>
      <Moviecard files={input ? input : files} />
    </>
  );
  // }
}

export default Movie;
