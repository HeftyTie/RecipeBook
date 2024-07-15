import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { useScroll } from '@hooks/useScroll';
import RecipeCard from '@components/RecipeCard'; 

const RecipeContainer = ({ recipes, id }) => {
  const { scrollRef, scrollLeft, scrollRight } = useScroll(id);
  const isHidden = recipes.length < 6 ? true : false;

  return (
    <div className="flex justify-center mx-auto">
      <button className={`hidden h-10 my-auto ${isHidden ? 'md:hidden' : 'md:flex'}`} onClick={scrollLeft} >
        <FaArrowCircleLeft size={30} />
      </button>

      <div className="w-11/12 mx-3 overflow-x-auto no-scrollbar" ref={scrollRef}>
          <div className="flex gap-3">
            {recipes.map((recipe, index) => (
                <RecipeCard key={index}  {...recipe} />
            ))}
          </div>
      </div>
        
      <button className={`hidden h-10 my-auto ${isHidden ? 'md:hidden' : 'md:flex'}`} onClick={scrollRight} >
        <FaArrowCircleRight size={30} />
      </button>
    </div>
  );
};

export default RecipeContainer;