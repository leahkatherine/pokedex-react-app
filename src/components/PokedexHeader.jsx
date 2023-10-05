export const PokedexHeader = ({
  searchInput,
  onSearchChange,
  // handleSearch,
}) => {
  return (
    <>
      <h1>Welcome back to your Pokédex</h1>
      <input
        type="text"
        placeholder="Enter Pokémon name or number"
        value={searchInput}
        onChange={onSearchChange}
      />

      {/* // LEAH:  Leaving this here for now, but we don't need it anymore as onSearchChange is being called every time text is modified, which means we would never need to click a search button */}
      {/* <button onClick={handleSearch}>Search</button> */}
    </>
  );
};
