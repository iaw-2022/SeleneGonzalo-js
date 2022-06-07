import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import DescriptionRecipe from "./layouts/DescriptionRecipe";
import Recipes from "./layouts/Recipes";
import CreateRecipe from "./layouts/CreateRecipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/recipes' element = {<Recipes />} />
        <Route path = '/recipe/:id' element = {<DescriptionRecipe />} />
        <Route path = '/recipe/create' element = {<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
