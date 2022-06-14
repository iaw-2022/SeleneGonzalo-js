import Header from "../components/Header"
import Footer from "../components/Footer"
import TemplateRecipe from "../components/TemplateRecipe"
import IngredientsData from "../data/IngredientsData" 
import {useState, useEffect } from 'react'

export default function CreateRecipe(){
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getCategories()
    }, []);

    function getCategories(){
        setError(false);
        fetch('https://api-recetaccs.herokuapp.com/categories', {
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
            <Header />
            {isLoaded ? 
                !error ?
                    <TemplateRecipe ingredients={IngredientsData} categories={categories}/>
                :
                <h1> ERROR </h1>
            :
                <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-yellow-500 mx-auto" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
            <Footer/> 
        </div>
    )
}
