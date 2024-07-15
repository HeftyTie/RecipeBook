import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

function RecipeCard({ id, image, authorName, header, totalTime }) {
  return (
    <Link to={`/recipe/${id}`} className="w-full sm:w-1/3 md:max-w-[17rem] flex-none overflow-hidden bg-blue-400 rounded-2xl hover:bg-blue-600">
      <img className="object-cover w-full aspect-square" src={image} alt="Recipe" />
      <div className="relative px-2 bottom-12">
        <div className="flex items-end">
          <Avatar name={authorName} round={true} size={100} />
          <p className="m-2 text-2xl line-clamp-1">{authorName}</p>
        </div>
        <div className="relative flex flex-col justify-between h-20 mx-3 mt-2 overflow-hidden top-10">
          <h3 className="text-xl font-bold line-clamp-2">{header}</h3>
          <h4 className="self-start w-20 px-2 mt-1 bg-gray-600 rounded-full">{totalTime} mins</h4>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;