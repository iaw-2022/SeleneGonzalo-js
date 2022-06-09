import { recipes } from "../data/RecipesData";

function DescriptionCard (props){    
    
    const recipe = props.recipe;
    const ingredients = props.ingredients;
    {console.log(ingredients)}
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
                            <span className="relative inline-block">
                                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-2 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                    <defs>
                                        <pattern id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95" x="0" y="0" width=".135" height=".30">
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)" width="52" height="24"/>
                                </svg>
                            <span className="relative">{recipe.name}</span>
                            </span>{' '}
                        </h2>
                        <p className="max-w-lg mb-6 font-sans text-2xl tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
                            Por {recipe.user}
                        </p>
                        <p className="text-base text-gray-700 md:text-lg">
                            {recipe.description}
                        </p>
                        <p className="max-w-lg mt-6 font-bold text-sm tracking-widest text-gray-900 sm:leading-none uppercase">
                            Ingredientes
                        </p>
                    </div>

                    
                    <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                        {ingredients.map( (ingredient) => 
                            <ul className="space-y-3">
                                <li className="flex justify-items-center">
                                    <span className="mr-1">
                                        <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    {ingredient.name}
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <img
                    className="mx-auto max-w-96 object-cover h-56 rounded-xl shadow-lg sm:h-96 object-scale-down"
                    src={recipe.image}
                    alt=""
                />
            </div>
        </div>
    )
}

export default DescriptionCard