import { useParams } from 'react-router-dom';
import { recipes } from '@assets/recipesData'; 

function Recipes() {
    const { id } = useParams();
    const recipe = recipes.find(item => item.id == id);

    if (!recipe) {
        return(
        <div className="relative text-5xl text-center top-52">
            404 - Recipe not found
        </div>
        );
    }

    return (
        <div className="flex justify-between p-10">
            <div className="w-full mx-5">
                <h2 className="mb-2 text-4xl font-bold">{recipe.header}</h2>
                <div className="flex items-center justify-between w-full border-b-2">
                    <p>Author: {recipe.authorName}</p>
                    <p>Last Updated: {recipe.lastUpdate}</p>
                </div>
                <div className="flex flex-wrap justify-between my-2 font-semibold">
                    <p><span>Prep Time:</span> {recipe.prepTime} minutes</p>
                    <p><span>Cook Time:</span> {recipe.cookTime} minutes</p>
                    <p><span>Total Time:</span> {recipe.totalTime} minutes</p>
                    <p><span>Servings:</span> {recipe.servings}</p>
                </div>
                <div className="flex mt-4 text-2xl font-semibold">
                    <div className="w-1/2">
                        <h3 className="w-1/2 mx-auto text-center">Equipment</h3>
                        {recipe.equipment.map((item, index) => (
                            <p key={index} className="text-lg leading-relaxed">{index + 1}. {item}</p>
                        ))}
                    </div>
                    <div className="w-1/2">
                        <h3 className="w-1/2 mx-auto text-center">Ingredients</h3>
                        {recipe.ingredients.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <p className="text-lg leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="mt-4 text-lg leading-relaxed">{recipe.recipe}</p>
            </div>
            <img src={recipe.image} alt={recipe.header} className="object-cover rounded-lg shadow-lg w-96 h-96" />
        </div>
    );
}

export default Recipes;