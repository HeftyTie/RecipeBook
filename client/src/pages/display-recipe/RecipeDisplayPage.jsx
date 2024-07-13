import { useParams } from 'react-router-dom';

function Recipes() {
    const { id } = useParams();
    const recipe = [];

    if (recipe.length === 0) {
        return(<div className="relative text-5xl text-center top-52">404 - Recipe not found</div>);
    }

    return (
        <div className="w-11/12 pt-5 mx-auto">
            <img src={recipe.image} alt={recipe.header} className="object-cover mx-auto rounded-md aspect-square" width={500} height={500}/>

            <div className="flex flex-col gap-2 mt-3">
                <h2 className="p-1 text-2xl border-b-2">{recipe.header || "Anonymous"}</h2>

                <div className="justify-between md:flex">
                    <p className="line-clamp-1">Author: {recipe.authorName}</p>
                    <p className="line-clamp-1">Last Updated: {recipe.lastUpdate || "N/A"}</p>
                </div>

                <div className="flex flex-wrap justify-between">
                    <p><span>Prep Time:</span> {recipe.prepTime || 0} minutes</p>
                    <p><span>Cook Time:</span> {recipe.cookTime || 0} minutes</p>
                    <p><span>Servings:</span> {recipe.servings|| 0}</p>
                    <p><span>Total Time:</span> {recipe.totalTime || 0} minutes</p>
                </div>

                <div className="justify-center md:flex md:gap-2">
                    <div className="flex flex-col gap-2 p-1 py-5 border h-fit md:w-1/2">
                        <h3 className="text-xl text-center">Ingredients</h3>
                        {recipe.ingredients && recipe.ingredients.length > 0 ?(
                            recipe.ingredients.map((item, index) => (
                                <div key={index} className="flex gap-2 mx-5">
                                    <input type="checkbox" />
                                    <p className="">{item}</p>
                                </div>
                            ))
                        ) : (
                            <p className="mx-5">No ingredients</p>
                        )}
                    </div>
                    
                    <div className="flex flex-col gap-2 p-1 py-5 border h-fit md:w-1/2">
                        <h3 className="text-xl text-center">Equipment</h3>
                        {recipe.equipment && recipe.equipment.length > 0 ? (
                            recipe.equipment.map((item, index) => (
                                <p key={index} className="mx-5">{index + 1}) {item}</p>
                                ))
                        ) : (
                            <p className="mx-5">No equipment</p>
                        )}
                    </div>
                </div>
                    
                <div  className="mt-2 text-lg leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                    <h3 className="my-2 text-4xl">Recipe:</h3>
                    {recipe.recipe ? recipe.recipe : "No Recipe"}
                </div>
            </div>
        </div>
    );
}

export default Recipes;