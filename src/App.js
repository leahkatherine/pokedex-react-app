import Pokedex from "./views/PokedexView";
import "./App.css";

function App() {
  // LEAH: Look how much cleaner your App.js file is now! Our App file is used to wrap our router in any context or store providers it needs globally, It should not be a workplace. Even though this project is more of a 'feature' than an 'app', you should still respect the heirarchy of the file structure by keeping your App.js file clean and simple and building Views and Components to do the heavy lifting, with Hooks handling all of the logic your app needs.
  return <Pokedex />;
}

export default App;
