import ComboBox from "../components/ComboBoxComponent"

function TemplateRecipe (props){
    const ingredients = props.ingredients;
    const categories = props.categories;
    return (
        <section className="bg-gray-100">
            <div cclassNamelass="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:py-12 lg:col-span-2">
                    <p className="max-w-xl text-lg">
                        ¡Comparte con el resto de la comunidad tus recetas mas exquisitas!
                    </p>

                    <div className="mt-8">
                    <a href="" className="text-2xl font-bold text-pink-600"> Nadie nace siendo un gran cocinero... <br></br> ¡se aprende intentando!  </a>
                    </div>
                </div>

                <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                    <form action="" className="space-y-4">
                    <div>
                        <label className="sr-only" for="name">Nombre de la receta</label>
                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Nombre receta" type="text" id="name" />
                    </div>

                    <div className="flex justify-center mt-8">
                        <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                            <div className="m-4">
                                <label className="inline-block mb-2 text-gray-500">Subir
                                    imagen (jpg,png,svg,jpeg)</label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                        <div className="cursor-pointer flex flex-col items-center justify-center pt-7">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                Seleccione una imagen</p>
                                        </div>
                                        <input type="file" className="opacity-0" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="sr-only" for="message">Descripción</label>
                        <textarea
                        className="w-full p-3 text-sm border-gray-200 rounded-lg"
                        placeholder="Descripción"
                        rows="8"
                        id="message"
                        ></textarea>
                    </div>

                    <ComboBox data={ingredients}/>
                    <ComboBox data={categories}/>

                    <div className="mt-4">
                        <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                        >
                            <span className="font-medium"> Guardar </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 ml-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}

export default TemplateRecipe