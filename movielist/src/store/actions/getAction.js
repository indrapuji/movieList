export function getData() {
  return (dispatch, getState) => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&page=1/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GETDATA",
          payload: data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
