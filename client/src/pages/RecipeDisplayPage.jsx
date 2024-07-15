import { useParams } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useRedirectIfEmpty } from '@hooks/useRedirectIfEmpty';
import { useAPI } from '@hooks/useGetAPI';

function Recipes() {
  const { id } = useParams();
  const { data: recipe, loading } = useAPI(`recipe/${id}`);
  
  useRedirectIfEmpty(recipe);

  const handleInput = async () => {
    const input = prompt("Please enter your input:");

    if (input !== null) {
      const formData = { passkey: input }; 
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      };

      try {
        const response = await fetch(`/api/manage-recipe`, requestOptions);
        if (response.ok) {
          alert('Recipe deleted successfully.');
        } else {
          alert(`Invalid Passkey`);
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
      }
    }
  };
  
  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="pt-5 mx-auto">
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
            
        <div className="mt-2 text-lg leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
          <h3 className="my-2 text-4xl">Instructions:</h3>
          {recipe.recipe ? recipe.recipe : "No Recipe"}
        </div>

        <div className="flex justify-center gap-3 mb-3 mr-3">
          <Link to={`/manage-recipe/${id}`} className="button !bg-orange-500 hover:!bg-orange-600 !flex items-center gap-2">
            <FaEdit size={30} /> 
            <p>Edit</p>
          </Link>
          <button className="button !bg-red-500 hover:!bg-red-600 !flex items-center gap-2" onClick={handleInput}>
            <FaTrash  size={30} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recipes;