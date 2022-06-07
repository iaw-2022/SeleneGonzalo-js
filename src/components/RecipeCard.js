
function RecipeCard(props){
    const recipe = props.recipe;
    return(
        <div class="card w-96 bg-base-100 shadow-xl image-full hover:scale-105 duration-500 transform transition">
            <figure><img className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md object-scale-down" src= {recipe.image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 className="mt-2 py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-dark-blue">{recipe.name}</h2>
                <p className = "mt-3"> Por {recipe.user} </p>
                <div className="card-actions justify-end">
                <a href = {"/recipe/" + recipe.id} className="mx-10 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-yellow-500 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Ver receta</a>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard