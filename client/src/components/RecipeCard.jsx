import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

function RecipeCard({ id, author, header, total_time, className}) {
  return (
    <Link to={`/recipe/${id}`} className={`flex-none w-full overflow-hidden bg-blue-400 hover:bg-blue-600 rounded-2xl ${className}`}>
      <div className="relative flex flex-col gap-3 p-5">
        <div className="flex items-center">
          <Avatar name={author} round={true} size={75} />
          <p className="m-2 text-xl line-clamp-2">{author}</p>
        </div>
        
        <div className="flex flex-col justify-between min-h-24">
          <h3 className="mb-auto text-xl font-bold line-clamp-2">{header}</h3>
          <h4 className="w-20 px-2 bg-gray-600 rounded-full">{total_time} mins</h4>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;