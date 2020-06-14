import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/actions/pokemonAction";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonReducer.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div className="containers">
      <h1 className="title">HOMEPAGE</h1>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {pokemons.map((pokemon) => {
            return (
              <tr key={pokemon.id}>
                <td>{pokemon.id}</td>
                <td>{pokemon.name}</td>
                <td>{pokemon.type}</td>
                <td>
                  <Link className="link" to={`/detail/${pokemon.id}`}>
                    Detail
                  </Link>{" "}
                  |
                  <Link className="link" to={`/edit/${pokemon.id}`}>
                    Edit
                  </Link>{" "}
                  |
                  <Link className="link" to={`/delete/${pokemon.id}`}>
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
