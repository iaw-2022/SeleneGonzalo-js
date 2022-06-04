import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Recipes from "./layouts/Recipes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/recipes' element = {<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
