import { usePokedex } from "../hooks/usePokedex";
import { PokedexHeader } from "../components/PokedexHeader";
import { PokedexEntry } from "../components/PokedexEntry";

function Pokedex() {
  // LEAH: I see you have the store.js file so I assume you are going to be using Redux. Remember the difference between a store/context and hooks. Your store should have the functions and states that can be accessed anywhere, and your hooks should be used to access those functions and states in the components that need them. I like to import my hooks in the view, then drill my props down to the components that need them that way they all share the same bytes of memory. If you are building your app using atomic design, you should never be prop drilling more than 2 levels deep.
  // LEAH: Here, we get data, the searchInput, loading and error states, as well as the onSearchChange function from our usePokedex hook. We can then pass these down to the components that need them. This way, we don't need to pass the same props to multiple components, and we don't need to pass props to components that don't need them. They also will all share the state values.
  // LEAH: Remember, states are set in the component that initilizes them. That would mean if you use usePokedex in PokedexEntry instead of accessing it from the prop set here, they would be different values. This is DIFFERENT than Redux where the store is global and can be accessed anywhere.
  // LEAH:  This is why we use hooks to access the store in the components that need it. Global context has its places, but hooks and states with smart design is a lot faster to render and optimize
  const {
    data,
    searchInput,
    loading,
    error,
    // handleSearch,
    onSearchChange,
  } = usePokedex();
  return (
    <div className="Pokedex">
      <PokedexHeader
        searchInput={searchInput}
        onSearchChange={onSearchChange}
        // handleSearch={handleSearch}
      />
      <PokedexEntry data={data} loading={loading} error={error} />
    </div>
  );
}

export default Pokedex;
