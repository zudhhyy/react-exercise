const initialState = {
  pokemons: [],
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_POKEMONS":
      return { ...state, pokemons: state.pokemons.concat(action.payload) };
    case "FETCH_POKEMONS":
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
}
