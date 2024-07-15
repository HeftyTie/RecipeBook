import { useState } from 'react';

import { useRedirectIfEmpty } from '@hooks/useRedirectIfEmpty';
import { useGetRequest } from '@hooks/requests';
import RecipeCard from '@components/RecipeCard'; 

function RecipesPage(){
  const [visibleCount, setVisibleCount] = useState(20);

  const showMore = () => {
      setVisibleCount(prevCount => prevCount + 20)
  }
  
  const { data: recipes, loading } = useGetRequest('api/recipes');
  useRedirectIfEmpty(recipes, loading);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }
  
  return(
    <>
      <div className="grid justify-center grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5">
        {recipes.slice(0, visibleCount).map((recipe, index) => (
          <RecipeCard {...recipe} key={index} />
        ))}
      </div>

      {visibleCount < recipes.length && (
        <div className="w-full mt-4 text-center">
          <button className="button" onClick={showMore}>
              Show More
          </button>
        </div>
      )}
    </>
  );
}

export default RecipesPage;