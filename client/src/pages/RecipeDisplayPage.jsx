import { useParams } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useGetRequest, useDeleteRequest } from '@hooks/requests';
import { useRedirectIfEmpty } from '@hooks/useRedirectIfEmpty';

function RecipeDisplay() {
  const { id } = useParams();
  const { data: recipe, loading } = useGetRequest(`api/recipe/${id}`);
  useRedirectIfEmpty(recipe, loading);

  const { deleteRecipe } = useDeleteRequest();
  const handleInput = () => {
    const input = prompt("Please enter your input:");

    if (input !== null) {
      deleteRecipe(input);
    }
  };
  
  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <>
      <h2 className="text-2xl text-center border-b-2">{recipe.header || "Recipe Header"}</h2>

      <div className="flex flex-wrap justify-between gap-2 mt-2">
        <p className="line-clamp-1">Author: {recipe.author || "Anonymous"}</p>
        <p className="line-clamp-1">Last Updated: {recipe.last_update ? new Date(recipe.last_update).toLocaleDateString('en-US') : "N/A"}
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-2 my-3">
        <p><span>Servings:</span> {recipe.servings|| 0}</p>
        <p><span>Prep Time:</span> {recipe.prep_time || 0} minutes</p>
        <p><span>Cook Time:</span> {recipe.cook_time || 0} minutes</p>
        <p><span>Total Time:</span> {recipe.total_time || 0} minutes</p>
      </div>

      <div className="flex flex-col justify-center gap-2 md:flex-row">
        <div className="flex flex-col gap-2 p-1 py-5 border md:w-1/2">
          <h3 className="text-xl text-center">Equipment</h3>
          {recipe.equipment && recipe.equipment.length > 0 ? (
            recipe.equipment.map((item, index) => (
                <p key={index} className="mx-5">{index + 1}&#41; {item}</p>
              ))
          ) : (
            <p className="mx-5">No equipment</p>
          )}
        </div>

        <div className="flex flex-col gap-2 p-1 py-5 border md:w-1/2">
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
      </div>

      <div className="mt-2 text-lg leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
        <h3 className="my-2 text-4xl">Instructions:</h3>
        {recipe.recipe && recipe.recipe.length > 0 ? (
            recipe.recipe.map((item, index) => (
              <p key={index} className="mx-2">{index + 1}&#41; {item}</p>
            ))
          ) : (
            <p className="mx-5">No Instructions</p>
          )}
      </div>

      <div className="flex justify-center gap-3 mt-5 mr-3">
        <Link to={`/manage-recipe/${id}`} className="button !bg-orange-500 hover:!bg-orange-600 !flex items-center gap-2">
          <FaEdit size={25} /> 
          <p>Edit</p>
        </Link>
        <button className="button !bg-red-500 hover:!bg-red-600 !flex items-center gap-2" onClick={handleInput}>
          <FaTrash size={25} />
          <span>Delete</span>
        </button>
      </div>
    </>
  );
}

export default RecipeDisplay;