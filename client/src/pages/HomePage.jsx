import { Link } from 'react-router-dom';
import RecipeContainer from '../components/RecipesContainer';
import { useAPI } from '@hooks/useGetAPI';

function Home() {
  const { data: recipes, loading } = useAPI('recipes');
  
  if (loading) {
      return <p className="loading">Loading...</p>;
  }

  if(!recipes){
    return(<h1 className="text-5xl">No recipes yet!</h1>);
  }
  
  const uniqueUsers = Array.from(
    new Set(recipes.map(recipeItem => recipeItem.authorName))
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full p-3">
        <h2 className="text-xl">Recent Recipes</h2>

        <Link className="button" to="/recipes">
          Show All
        </Link>
      </div>

      <RecipeContainer recipes={recipes} id="recent-recipes" />

      {uniqueUsers.map((user, index) => (
        <>
          <div key={index} className="flex justify-between w-full p-3">
            <h2 className="text-xl">Recipes by {user}</h2>
          </div>
  
          <RecipeContainer
            recipes={recipes.filter(recipe => recipe.authorName === user)}
            id={`${user}-recipes`}
          />
        </>
      ))}
    </div>
  );
}

export default Home;