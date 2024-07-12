import { Link } from 'react-router-dom';
import RecipeContainer from './components/RecipesContainer';

function Home() {
    const recipes = [];
    const uniqueUsers = Array.from(
        new Set(recipes.map(recipeItem => recipeItem.authorName))
      );
    
    return (
      <>
        <div className="flex items-center justify-between p-5 md:mx-10">
          <h2 className="text-xl">Recent Recipes</h2>
          <Link className="px-3 py-2 bg-blue-400 rounded-full" to="/recipes">
            Show All
          </Link>
        </div>
  
        <RecipeContainer recipes={recipes} id="recent-recipes" />

        {uniqueUsers.map((user, index) => (
            <div key={index}>
              <div className="flex items-center justify-between p-5 md:mx-10">
              <h2 className="text-xl">Recipes by {user}</h2>
            </div>

            <RecipeContainer recipes={recipes.filter(recipe => recipe.authorName === user)} id={`${user}-recipes`} />
          </div>
        ))}
      </>
    );
  }

export default Home;