import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { useScroll } from '../hooks/useScroll';
import Button from '@components/Button';
import RecipeCard from '@components/RecipeCard'; 

const RecipeContainer = ({ recipes, id }) => {
    const { scrollRef, scrollLeft, scrollRight } = useScroll(id);
    const isHidden = recipes.length < 6 ? true : false;
  
    return (
      <div className="flex justify-center mx-auto">
        <Button event={scrollLeft} buttonIcon={FaArrowCircleLeft} isHidden={isHidden} />
        <div className="flex w-11/12 gap-3 mx-3 overflow-x-auto no-scrollbar" ref={scrollRef}>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
        <Button event={scrollRight} buttonIcon={FaArrowCircleRight} isHidden={isHidden} />
      </div>
    );
  };

export default RecipeContainer;