import Header from "../components/Header"
import Footer from "../components/Footer"
import DescriptionCard from "../components/DescriptionCard"
import recipes from "../data/RecipesData"

function DescriptionRecipe (){
    return (
        <div>
            <Header />
            <DescriptionCard recipe={recipes.recipes[0]} ingredients ={recipes.ingredients}key={recipes.recipes[0].id}/>
            <Footer/> 
        </div>
    )
}

export default DescriptionRecipe