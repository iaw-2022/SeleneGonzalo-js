import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import DescriptionRecipe from "./layouts/DescriptionRecipe";
import Recipes from "./layouts/Recipes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = '/' element = {<Navigate to="/recipes" replace />} />
        <Route path = '/recipes' element = {<Recipes />} />
        <Route path = '/recipe/:id' element = {<DescriptionRecipe />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
