const initialState = {
  favorites: [],
  files: [],
};

function reducer(state = initialState, action) {
  if (action.type === "ADDFAV") {
    return { ...state, favorites: state.favorites.concat(action.payload) };
  } else if (action.type === "GETDATA") {
    return { ...state, files: action.payload };
  }
  return state;
}

export default reducer;
