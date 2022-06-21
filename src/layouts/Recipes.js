import RecipeCard from "../components/RecipeCard"
import {useState, useEffect } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Recipes (){
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getRecipes()
    }, []);

    function getRecipes(){
        setError(false);
        fetch('https://api-recetaccs.herokuapp.com/recipes', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        }).then(res => res.ok ? res.json() : null)
        .then(
            (data) => {
                if(data !== null){
                    setRecipes(data)
                    setIsLoaded(true)
                }else{
                    setError(true);
                    setIsLoaded(true);
                }
            },
        )
    }
    return (
        
        <div className = "flex flex-col h-screen justify-between">
            <div className="my-auto grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
                {isLoaded ? 
                    !error ?
                        recipes.map(((recipe) => (
                            <RecipeCard recipe={recipe} key={recipe.id}/>
                        )))
                    : 
                    <h1> ERROR </h1>
                : 
                    <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-yellow-500 mx-auto" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
            </div>  
        </div>
    )
}
