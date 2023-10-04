import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import  CommentMain  from './components/CommentMain.js';

import './App.css';

function App() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [number, setNumber] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);



  useEffect(() => {
    if (!searchInput) return;

    setLoading(true);
    setError(null);

    let URL;

    if (!isNaN(searchInput)) {
      // If the input is a number, use it as a number
      URL = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
    } else {
      // If the input is not a number, treat it as a name
      URL = `https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`;
    }
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
        setName(response.data.name);
        setWeight(response.data.weight);
        setLoading(false);
        setDataFetched(true);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [searchInput]);

  const handleSearch = () => {
    setSearchInput(searchInput.trim());
  };

  return (
    <div className="App">
      <h1>Welcome back to your Pokédex</h1>
      <input
        type="text"
        placeholder="Enter Pokémon name or number"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (

        dataFetched && (
        <>
          <h2>Name: {name}</h2>
          <h3>Weight: {weight}</h3>
          <img
            src={data ? data.sprites.other.dream_world.front_default : ''}
            alt={name}
          />
          <p>My abilities are:</p>
          {data ? (
            data.abilities.map((value, key) => (
              <p key={key}>{value.ability.name}</p>
            ))
          ) : (
            ''
          )}
          <CommentMain/>
        </>
      ))}
    </div>

  );
}

export default App;


