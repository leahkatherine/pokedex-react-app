import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const usePokedex = () => {
  const [data, setData] = useState(); // LEAH: We don't need states for name and weight when they are just duplicates of data.name and data.weight. you can use consts to assign or extrapolate as I will in the PokedexEntry.tsx file to keep your renders down and code clean
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchForPokemon = useCallback(async (searchInput) => {
    setLoading(true);
    setError(null);

    const URL = `https://pokeapi.co/api/v2/pokemon/${
      !isNaN(searchInput) ? searchInput : searchInput.toLowerCase()
    }`;

    await axios
      .get(URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        // LEAH: The user doesn't need to know what the response status is. So, if we see that the error is because a pokemon wasn't found, we can just tell the user that the pokemon wasn't found. That way we only show a technical message, one of more use for you as a developer than a client would have, is if the error is something other than pokemon not found
        const pokemonNotFound =
          error.response.status === 404 && error.response.data === "Not Found";
        setError(pokemonNotFound ? "Pokemon not found" : error.message);
      });

    setLoading(false);
  }, []);

  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  // LEAH:  Leaving this here for now, but we don't need it anymore as onSearchChange is being called every time text is modified, which means we would never need to click a search button
  //   const handleSearch = () => {
  //     searchForPokemon(searchInput);
  //   };

  useEffect(() => {
    // LEAH: We made a few changes here that will clean up the way the search runs. Since we are calling to a third party API, we want to limit the number of api calls we make. We are using a technique called debouncing, which means every time seach input changes, we wait 2 seconds before performing the search. This way, if the user is typing quickly, we don't make a call for every letter they type. We only make a call after they have stopped typing for 2 seconds. This is a common technique used in search bars.
    let debounceTimer;

    if (searchInput) {
      setLoading(true);

      // Clear the previous debounce timer, if it exists
      clearTimeout(debounceTimer);

      // Set a new debounce timer to wait for 2 seconds before performing the search
      debounceTimer = setTimeout(() => {
        searchForPokemon(searchInput);
      }, 2000);
    } else {
      // LEAH: if the search input is empty, we want to clear the data from the previous search
      setData(null);

      setLoading(false);
      setError(null);
    }

    return () => {
      // Clear the debounce timer when the component unmounts or when searchInput changes
      clearTimeout(debounceTimer);
    };
  }, [searchInput, searchForPokemon]);

  return {
    data,
    searchInput,
    loading,
    error,
    // handleSearch,
    onSearchChange,
  };
};
