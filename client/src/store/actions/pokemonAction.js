export function addPokemon(newPokemon) {
  return (dispatch, getstate) => {
    fetch("http://localhost:3001/pokemons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "ADD_POKEMON",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchPokemons() {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/pokemons", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "FETCH_POKEMONS",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
