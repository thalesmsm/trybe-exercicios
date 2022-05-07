import './App.css';
import Pokedex from './components/Pokedex';
import data from "./data";

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={data}/>
    </div>
  );
}

export default App;
