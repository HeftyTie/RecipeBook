import { Link } from 'react-router-dom';
import { useGetRequest } from '@hooks/requests';
import RecipeContainer from '@components/RecipesContainer';

function Home() {
  const { data: recipes, loading } = useGetRequest('api/recipes');

  const isHttps = window.location.href.startsWith('https');

  if (isHttps) {
    return (
      <h1 className="loading">
        HTTPS detected, server only runs on HTTP for demo. Consider switching to HTTP.
      </h1>
    );
  }

  if (loading) {
      return <p className="loading">Loading...</p>;
  }

  if (recipes.length === 0) {
    return(<h1 className="loading">No recipes yet!</h1>);
  }

  const uniqueUsers = Array.from(
    new Set(recipes.map(recipeItem => recipeItem.author))
  );

  return (
    <>
      <div className="flex items-center justify-between w-full p-5">
        <h2 className="text-xl">Recent Recipes</h2>
        <Link className="button" to="/recipes">
          Show All
        </Link>
      </div>
      
      <RecipeContainer recipes={recipes} id="recent-recipes" />

      {uniqueUsers.map((user, index) => (
        <div key={index}>
          <div className="flex items-center justify-between w-full p-5">
            <h2 className="text-xl">Recipes by {user}</h2>
          </div>

          <RecipeContainer
            key={user}  // Add key here for RecipeContainer
            recipes={recipes.filter(recipe => recipe.author === user)}
            id={`${user}-recipes`}
          />
        </div>
      ))}
    </>
  );
}

export default Home;