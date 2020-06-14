import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pokemonReducer from "./reducers/pokemonReducer";

const reducer = combineReducers({
  pokemonReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
