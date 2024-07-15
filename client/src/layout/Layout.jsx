import { Outlet, Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

function Layout(){
  return(
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between">
        <Link to="/" className="text-4xl">Recipe Book</Link>
        <Link to="/manage-recipe" className="button">Add Recipe</Link>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow p-5">
        <Outlet />
      </div>

      <footer className="flex justify-end">
        <p>&copy; {new Date().getFullYear()} - Ramon Alvarez</p>
        <a href="https://github.com/HeftyTie/RecipeBook" target="_blank">
          <FaGithub className="mx-2 text-xl"/>
        </a>
      </footer>
    </div>
  );
}

export default Layout;