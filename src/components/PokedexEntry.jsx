import CommentMain from "./CommentMain";

export const PokedexEntry = ({ data, loading, error }) => {
  if (loading) return <p>Loading...</p>; // LEAH: We don't need to render anything if we are loading, and this prevents us from having to make conditional arguments in our JSX

  if (error) return <p>Error: {error}</p>; // LEAH: We don't need to render anything if there is an error, and this prevents us from having to make conditional arguments in our JSX

  if (!data) return null; // LEAH: We don't need to render anything if there is no data, and this prevents us from having to make conditional arguments in our JSX
  const { name, weight, abilities, sprites } = data; // LEAH: We can destructure the data here so that we don't have to keep writing data.name, data.weight, etc. We can just use name, weight, etc and still get clean code
  const imgUrl = sprites?.other?.dream_world?.front_default || ""; // LEAH: We use optional chaining here so that if one of the properties on sprites does not exist, we simply just have imgUrl be an empty string. This way we don't get an error when trying to access a property on an undefined object
  return (
    <>
      <h2>Name: {name}</h2>
      <h3>Weight: {weight}</h3>
      {/* LEAH: We don't need an img component if there is no imgUrl found. For starters, I just put an empty div there, but to take this further you can apply the same styles (specifically min and max widths) to tbe img component on the left as the empty div on the right, that way if there is no url they take up the same amount of space and don't break the responsiveness of your page that relies on there being a block to take up space here*/}
      {imgUrl ? <img src={imgUrl} alt={name} /> : <div />}
      <p>My abilities are:</p>
      {abilities.map(
        (
          value,
          index // LEAH: We set abilities to be an empty string if not found, so now we don't need to conditionally render this as an empty string
        ) => (
          <p key={`${index}_pokedexEntry_abilities`}>{value.ability.name}</p> // LEAH: When placing a key, there are rules you should follow to ensure page optinmization .  The first is that the key should always be unique. Even though you are only mapping and using a key here, if you used this same approach of only using the index as the key on the same page twice, then you would have duplicate keys and then your page won't update correctly.
        )
      )}
      <CommentMain />
    </>
  );
};
