import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { useScroll } from '@hooks/useScroll';
import RecipeCard from '@components/RecipeCard'; 

const RecipeContainer = ({ recipes, id }) => {
  const { scrollRef, scrollLeft, scrollRight } = useScroll(id);
  const isHidden = recipes.length < 5 ? true : false;

  return (
    <div className="flex justify-center mx-auto">
      <button className={`hidden h-10 my-auto ${isHidden ? 'md:hidden' : 'md:flex'}`} onClick={scrollLeft} >
        <FaArrowCircleLeft size={30} />
      </button>

      <div className="flex w-11/12 gap-3 mx-3 overflow-x-auto no-scrollbar" ref={scrollRef}>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} className="sm:w-1/3 md:w-1/5" />
        ))}
      </div>
        
      <button className={`hidden h-10 my-auto ${isHidden ? 'md:hidden' : 'md:flex'}`} onClick={scrollRight} >
        <FaArrowCircleRight size={30} />
      </button>
    </div>
  );
};

export default RecipeContainer;