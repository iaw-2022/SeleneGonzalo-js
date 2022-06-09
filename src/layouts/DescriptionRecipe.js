import Header from "../components/Header"
import Footer from "../components/Footer"
import DescriptionCard from "../components/DescriptionCard"
import recipes from "../data/RecipesData"
import QualificationCard from "../components/QualificationCard"
import qualifications from "../data/QualificationsData"

function DescriptionRecipe (){
    return (
        <div>
            <Header />
            <DescriptionCard recipe={recipes.recipes[0]} ingredients ={recipes.ingredients} categories={recipes.categories} key={recipes.recipes[0].id}/>
            <div id="carouselExampleCaptions" class="mb-6 carousel slide relative carousel-dark" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">
                    {qualifications.map(((qualification,index) => (
                        <QualificationCard qualification={qualification} index={index} key={qualification.id}/>
                    )))}
                </div>
                <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Footer/> 
        </div>
    )
}

export default DescriptionRecipe