import { Outlet, Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

function Layout(){
    return(
        <div className="flex flex-col min-h-screen">
            <nav className="flex flex-row items-center justify-between p-4 text-xl bg-blue-400 border-b-2">
                <Link to="/" className="text-2xl md:text-4xl">Recipe Book</Link>
                <Link to="/add-recipe" className="p-2 bg-blue-600 rounded-full">Add Recipe</Link>
            </nav>

            <div className="flex-grow pb-10">
                <Outlet />
            </div>

            <footer className='flex items-center content-center justify-end p-3 text-center bg-blue-400 border-t-2'>
                <p className='m-0'>&copy; {new Date().getFullYear()} - Ramon Alvarez</p>
                <a href="https://github.com/HeftyTie/RecipeBook" target="_blank">
                    <FaGithub className="mx-2 text-xl" />
                </a>
            </footer>
        </div>
    );
}

export default Layout;