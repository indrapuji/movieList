const initialState = {
  favorites: [],
  popularmovie: [],
  playingmovie: [],
  upcomingmovie: [],
  topratedmovie: [],
};

function reducer(state = initialState, action) {
  if (action.type === "ADDFAV") {
    return { ...state, favorites: state.favorites.concat(action.payload) };
  } else if (action.type === "GETPOPULARMOVIE") {
    return { ...state, popularmovie: action.payload };
  } else if (action.type === "GETPLAYINGMOVIE") {
    return { ...state, playingmovie: action.payload };
  } else if (action.type === "GETUPCOMINGMOVIE") {
    return { ...state, upcomingmovie: action.payload };
  } else if (action.type === "GETTOPRATEDMOVIE") {
    return { ...state, topratedmovie: action.payload };
  }
  return state;
}

export default reducer;
