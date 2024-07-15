import { useState } from 'react';
import { useRedirectIfEmpty } from '@hooks/useRedirectIfEmpty';
import { useAPI } from '@hooks/useGetAPI';

import RecipeCard from '@components/RecipeCard'; 

function RecipesPage(){
  const [visibleCount, setVisibleCount] = useState(20);

  const showMore = () => {
      setVisibleCount(prevCount => prevCount + 20)
  }
  
  const { data: recipes, loading } = useAPI('recipes');

  useRedirectIfEmpty(recipes);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return(
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {recipes.slice(0, visibleCount).map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
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