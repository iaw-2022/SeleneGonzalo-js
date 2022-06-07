import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import DescriptionRecipe from "./layouts/DescriptionRecipe";
import Recipes from "./layouts/Recipes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/recipes' element = {<Recipes />} />
        <Route path = '/recipe/:id' element = {<DescriptionRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
