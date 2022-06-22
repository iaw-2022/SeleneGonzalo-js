import DescriptionCard from "../components/DescriptionCard"
import QualificationCard from "../components/QualificationCard"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

export default function DescriptionRecipe (){
    const {id} = useParams();
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [qualifications, setQualifications] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getRecipe()
        getCategories()
        getIngredients()
        getQualifications()
    }, []);

    function getRecipe(){
        fetch('https://api-recetaccs.herokuapp.com/recipes/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        }).then(res => res.ok ? res.json() : null)
        .then(
            (data) => {
                if(data !== null){
                    setRecipe(data)
                }
            },
        )
    }

    function getCategories(){
        fetch('https://api-recetaccs.herokuapp.com/categories/recipe/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        }).then(res => res.ok ? res.json() : null)
        .then(
            (data) => {
                if(data !== null){
                    setCategories(data)
                }
            },
        )
    }

    function getIngredients(){
        fetch('https://api-recetaccs.herokuapp.com/ingredients/recipe/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        }).then(res => res.ok ? res.json() : null)
        .then(
            (data) => {
                if(data !== null){
                    setIngredients(data)
                }
            },
        )
    }

    function getQualifications(){
        setError(false)
        fetch('https://api-recetaccs.herokuapp.com/qualifies/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        }).then(res => res.ok ? res.json() : null)
        .then(
            (data) => {
                if(data !== null){
                    setQualifications(data)
                    setIsLoaded(true)
                }else{
                    setError(true)
                    setIsLoaded(true)
                }
            },
        )
    }
    
    return (
        <div>
            <DescriptionCard recipe={recipe} ingredients ={ingredients} categories={categories} key={id}/>
            <div id="carouselExampleCaptions" className="mb-6 carousel slide relative carousel-dark" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    {isLoaded ? 
                    !error ?
                        qualifications.map(((qualification,index) => (
                            <QualificationCard qualification={qualification} index={index} key={qualification.id}/>
                        )))
                        :
                        <h1 className="text-center"> Aún no hay calificaciones, ¡sé el primero en comentar! </h1>
                    :
                        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-yellow-500 mx-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                </div>
                
                {qualifications.length > 1 && 
                    <div>
                        <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}
