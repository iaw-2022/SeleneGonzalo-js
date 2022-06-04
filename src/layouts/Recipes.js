import Header from "../components/Header"
import recipes from "../data/RecipesData"
import RecipeCard from "../components/RecipeCard"
import Footer from "../components/Footer"

function Recipes (){
    return (
        <div>
            <Header />
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full mt-10 mx-10">
                {recipes.map(((recipe) => (
                    <RecipeCard recipe={recipe} key={recipe.id}/>
                )))}
            </div>  

            <Footer/> 
        </div>
    )
}

export default Recipes