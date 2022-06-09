import Header from "../components/Header"
import recipes from "../data/RecipesData"
import RecipeCard from "../components/RecipeCard"
import Footer from "../components/Footer"

function Recipes (){
    return (
        <div className = "flex flex-col h-screen justify-between">
            <Header />
            <div className="my-7 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 mx-10">
                {recipes.recipes.map(((recipe) => (
                    <RecipeCard recipe={recipe} key={recipe.id}/>
                )))}
            </div>  
            <Footer/> 
        </div>
    )
}

export default Recipes