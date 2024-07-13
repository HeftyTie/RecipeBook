import { useState } from 'react';

import RecipeCard from '@components/RecipeCard'; 
import { recipes } from '@assets/recipesData'; 

function RecipesPage(){
    const [visibleCount, setVisibleCount] = useState(20);

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 20)
    }

    return(
        <div className="flex flex-wrap w-11/12 gap-3 p-2 pt-10 mx-auto">
            {recipes.slice(0, visibleCount).map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
            ))}
            {visibleCount < recipes.length && (
                <div className="w-full mt-4 text-center">
                    <button 
                        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={showMore}
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}

export default RecipesPage;