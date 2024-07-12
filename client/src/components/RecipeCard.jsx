import Avatar from 'react-avatar';

function RecipeCard({ recipeImage, authorName, recipeHeader, totalTime }) {
    return (
        <div className="flex-none w-full md:max-w-[17rem] rounded overflow-hidden shadow-lg bg-blue-400">
            <img className="object-cover w-full h-60" src={recipeImage} alt="Recipe" />
            <div className="relative px-2 bottom-8">
                <div className="flex items-end">
                    <Avatar name={authorName} round={true} size="65" />
                    <p className="ml-2 text-lg">{authorName}</p>
                </div>
                <div className="relative flex-wrap mt-2 overflow-hidden top-3">
                    <h3 className="text-xl font-bold ">{recipeHeader}</h3>
                    <h4 className="w-20 px-2 mt-1 bg-blue-600 rounded-full">{totalTime} mins</h4>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;