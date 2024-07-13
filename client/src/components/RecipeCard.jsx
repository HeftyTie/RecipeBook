import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

function RecipeCard({ id, image, authorName, header, totalTime }) {
    return (
    <Link to={`/recipe/${id}`} className="flex-none w-full md:max-w-[17rem] rounded overflow-hidden shadow-lg bg-blue-400">
        <img className="object-cover w-full h-[25vh] md:h-60" src={image} alt="Recipe" />
        <div className="relative px-2 bottom-8">
            <div className="flex items-end">
                <Avatar name={authorName} round={true} size="65" />
                <p className="ml-2 text-lg line-clamp-1">{authorName}</p>
            </div>
            <div className="relative flex flex-col justify-between h-20 mx-3 mt-2 overflow-hidden top-3">
                <h3 className="text-xl font-bold line-clamp-2">{header}</h3>
                <h4 className="self-start w-20 px-2 mt-1 bg-blue-600 rounded-full">{totalTime} mins</h4>
            </div>
        </div>
    </Link>
    );
}

export default RecipeCard;