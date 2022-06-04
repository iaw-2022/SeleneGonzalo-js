import recipes from "../data/RecipesData";

function RecipeCard(props){
    const recipe = props.recipe;
    
    return(
        <div class="card w-96 bg-base-100 shadow-xl image-full hover:scale-105 duration-500 transform transition">
            <figure><img className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md object-scale-down" src= {recipe.image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 className="mt-2 py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{recipe.name}</h2>
                <p className = "mt-1"> Por {recipe.user} </p>
                <div className="card-actions justify-end">
                <button className="mb-4 mt-3 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Ver receta</button>
                </div>
            </div>
        </div>

        // <div className="flex flex-col items-center justify-center max-w-sm mx-auto hover:scale-105 duration-500 transform transition">
        //     <img className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md object-scale-down" src= {recipe.image}></img>
        //     <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        //         <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"> {recipe.name} </h3>
        //         <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
        //             <span className="font-bold text-gray-800 dark:text-gray-200"> {recipe.user} </span>
        //             <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Ver receta</button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default RecipeCard