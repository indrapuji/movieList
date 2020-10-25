export function getPopularMovie() {
  return (dispatch, getState) => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GETPOPULARMOVIE",
          payload: data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function getPlayingMovie() {
  return (dispatch, getState) => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GETPLAYINGMOVIE",
          payload: data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function getUpcomingMovie() {
  return (dispatch, getState) => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GETUPCOMINGMOVIE",
          payload: data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function getTopRatedMovie() {
  return (dispatch, getState) => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GETTOPRATEDMOVIE",
          payload: data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
