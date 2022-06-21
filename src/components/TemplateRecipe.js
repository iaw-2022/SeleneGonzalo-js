import ComboBox from "../components/ComboBoxComponent"
import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function TemplateRecipe (props){
    const ingredients = props.ingredients;
    const categories = props.categories;
    const [id_recipe, setIdRecipe] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const {getAccessTokenSilently} = useAuth0();
    const [name, setName] = useState([]);
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState([]);

    function createRecipe(){
        console.log("ENTRO")
        postRecipe().then();
    }

    async function postRecipe(){
        const token = await getAccessTokenSilently()
        console.log(name)
        fetch('https://api-recetaccs.herokuapp.com/recipes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}` 
        },
        body: {
            'name': name,
            'image': '',
            'description': ''
        },
        }).then(res => res.ok ? res.json() : null)
        .then(
            (data) => {
                if(data !== null){
                    setIdRecipe(data)
                }
            },
        )
    }

    function postIngredients(){
        fetch('https://api-recetaccs.herokuapp.com/ingredients/recipe', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: {
            'id_recipe': id_recipe
        }, 
        })
    }

    function postCategories(){
        fetch('https://api-recetaccs.herokuapp.com/categories/recipe', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: {
            'id_recipe': id_recipe,
            'id_category': ''
        },
        })
    }

    return (
        <section className="bg-gray-100">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
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
                        <label className="sr-only" htmlFor="name">Nombre de la receta</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nombre receta" type="text" id="name" value = {name} onChange = {e=>setName(e.target.value)} />
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
                                                <path fillRule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                Seleccione una imagen</p>
                                        </div>
                                        <input id ="image" type="file" className="opacity-0" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="message">Descripción</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Descripción" rows="8" id="description"></textarea>
                    </div>

                    <div className = "grid grid-cols-2 gap-4">
                        <ComboBox data={categories} placeholder={"Seleccione las categorías"} setSelected = {setSelectedCategories}/>
                        <ComboBox data={ingredients} placeholder={"Seleccione los ingredientes"} setSelected = {setSelectedIngredients}/>
                    </div>
                    {selectedIngredients.length > 0 ?
                        <div className="pt-4">
                            <span className="text-bold text-l"> Seleccione las cantidades</span>

                            <div className = "mt-2 grid grid-cols-2 gap-y-4 gap-x-2">
                                {selectedIngredients.map((ingredient) => 
                                    <input placeholder={"Ingrese la cantidad de "+ingredient.name}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                                )}
                            </div>
                        </div>
                    :""}
                    
                    <div className="mt-4">
                        {/* <a href= "/recipes" type="submit" className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"> */}
                            <button className="font-medium" onClick={createRecipe()}> Guardar </button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        {/* </a> */}
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}

export default TemplateRecipe