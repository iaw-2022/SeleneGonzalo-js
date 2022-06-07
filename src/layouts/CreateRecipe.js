import Header from "../components/Header"
import Footer from "../components/Footer"
import TemplateRecipe from "../components/TemplateRecipe"

function CreateRecipe(){
    return (
        <div className = "flex flex-col h-screen justify-between">
            <Header />
            <TemplateRecipe/>
            <Footer/> 
        </div>
    )
}

export default CreateRecipe