import { recipes } from "../data/RecipesData";

function DescriptionCard (props){    
    
    const recipe = props.recipe;
    const ingredients = props.ingredients;
    {console.log(ingredients)}
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
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
                    </div>

                    <p className="ml-4 text-sm font-bold tracking-widest uppercase">
                        Ingredientes
                    </p>
                    <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                        {ingredients.map( (ingredient) => 
                            <ul className="space-y-3">
                                <li className="flex">
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
                <div>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96 object-scale-down"
                    src={recipe.image}
                    alt=""
                />
                </div>
            </div>
        </div>
        // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        //     <div className="mx-auto sm:text-center lg:max-w-2xl">
        //         <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        //         <div>
        //             <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        //                 Por {recipe.user}
        //             </p>
        //         </div>
        //             <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        //                 <span className="relative inline-block">
        //                 <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
        //                     <defs>
        //                         <pattern id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95" x="0" y="0" width=".135" height=".30">
        //                             <circle cx="1" cy="1" r=".7" />
        //                         </pattern>
        //                     </defs>
        //                     <rect fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)" width="52" height="24"/>
        //                 </svg>
        //                 <span className="relative">{recipe.name}</span>
        //                 </span>{' '}
        //             </h2>
        //             <p className="text-base text-gray-700 md:text-lg">
        //                 {ingredients.map( (ingredient) => 
        //                  <p>{ingredient.name} <br></br></p>
        //                 )}
        //             </p>
        //         </div>
        //         <div className="w-45 bg-base-100 image-full hover:scale-105 duration-500 transform transition"> 
        //             <img
        //                 className="w-full h-80 bg-center bg-cover rounded-lg object-scale-down"
        //                 src={recipe.image}
        //                 alt=""
        //             />
        //         </div>
        //             <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
        //                 {recipe.description}
        //             </p>
                    
        //         </div>
        // </div>
    )
}

export default DescriptionCard