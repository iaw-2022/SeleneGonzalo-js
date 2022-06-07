import { recipes } from "../data/RecipesData";

function DescriptionCard (props){    
    
    const recipe = props.recipe;
    const ingredients = props.ingredients;
    {console.log(ingredients)}
    return (
        <div class="container my-32 mx-auto p-4 md:p-0 ">
            <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
                <img class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative" src={recipe.image}/>
                    <div class="absolute text-xl">
                        <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                    </div>
                <div class="bg-white w-full md:w-2/3">
                
                    <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                        <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                            <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                                <h3>{recipe.name}</h3>
                                <p class="mb-0 mt-3 text-grey-dark text-sm italic">{recipe.user}</p>
                                <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                            </div>
                            <div class="w-full lg:w-3/5 lg:px-3">
                                <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">

                                    {ingredients.map( (ingredient) => 
                                        <p>{ingredient.name} <br></br></p>
                                    )}

                                    {recipe.description}
                                </p>
                            </div>
                            <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                                <button class="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">Visit now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard