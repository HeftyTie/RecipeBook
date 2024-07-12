import { Outlet, Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

function Layout(){
    return(
        <div className="flex flex-col min-h-screen">
            <nav className="flex flex-row justify-between text-xl border-b-2 p-4 items-center">
                <Link to="/recipes">All Recipes</Link>

                <Link to="/" className="text-5xl">Recipe Book</Link>

                <Link to="/about">About</Link>
            </nav>

            <div className="flex-grow">
                <Outlet />
            </div>

            <footer className='flex border-t-2 justify-end content-center items-center py-2 text-center'>
                <p className='m-0'>&copy; {new Date().getFullYear()} - Ramon Alvarez</p>
                <a href="https://github.com/HeftyTie/RecipeBook" target="_blank">
                    <FaGithub className="mx-2 text-xl" />
                </a>
            </footer>
        </div>
    );
}

export default Layout;