import { Link } from "react-router-dom";

function Header(){
    return(
        <nav className="flex flex-row justify-between text-xl border-b-2 p-4 items-center">
            <Link to="/recipes">All Recipes</Link>

            <Link to="/" className="text-5xl">Recipe Book</Link>

            <Link to="/about">About</Link>
        </nav>
    );
}

export default Header