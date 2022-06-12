import { recipes } from "../data/RecipesData";

function DescriptionCard (props){    
    
    const recipe = props.recipe;
    const ingredients = props.ingredients;
    const categories = props.categories;

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
                        <p className="max-w-lg mb-6 font-sans text-sm tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
                            Por {recipe.user} <br></br>
                            
                            <div className="max-w-lg mb-6 font-sans text-sm tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
                                <ul className="pt-3 grid grid-cols-2">
                                    {categories.map( (category) => 
                                        <li className="flex justify-center">
                                            {category.name} 
                                        </li>
                                    )}
                                </ul>
                            </div>
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
                                    {ingredient.name} {ingredient.cantidad}
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
            <button type="button" data-modal-toggle="exampleModal" class="mt-5 px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal"> Calificar </button>

            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog relative w-auto pointer-events-none">
                    <div
                    class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Calificación</h5>
                            <button type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div class="modal-body relative p-4">
                            <div>
                                <label className="sr-only" for="message">Calificación</label>
                                <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Calificación"
                                rows="4"
                                id="message"
                                ></textarea>
                                <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Puntaje"
                                rows="1"
                                id="message"
                                ></textarea>
                            </div>
                        </div>
                        <div
                            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button" class="px-6
                            py-2.5
                            bg-red-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-red-700 hover:shadow-lg
                            focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-red-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="px-6
                        py-2.5
                        bg-green-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-green-700 hover:shadow-lg
                        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-green-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                        ml-1">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard