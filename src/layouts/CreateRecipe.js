import Header from "../components/Header"
import Footer from "../components/Footer"
import TemplateRecipe from "../components/TemplateRecipe"
import IngredientsData from "../data/IngredientsData" 
import CategoriesData from "../data/CategoriesData"

function CreateRecipe(){
    return (
        <div className = "flex flex-col h-screen justify-between">
            <Header />
            <TemplateRecipe ingredients={IngredientsData} categories={CategoriesData}/>
            <Footer/> 
        </div>
    )
}

export default CreateRecipe