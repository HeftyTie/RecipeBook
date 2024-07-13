import { useState } from 'react';

import RecipeCard from '@components/RecipeCard'; 

function RecipesPage(){
    const [visibleCount, setVisibleCount] = useState(20);

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 20)
    }

    const recipes = [];
    
    if (recipes.length === 0) {
        return(<div className="relative text-5xl text-center top-52">404 - No Recipes Found</div>);
    }

    return(
        <div className="p-0 pt-5 mx-2 md:pt-10 md:p-2">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-5">
                {recipes.slice(0, visibleCount).map((recipe, index) => (
                        <RecipeCard key={index} {...recipe} />
                    ))}
            </div>
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