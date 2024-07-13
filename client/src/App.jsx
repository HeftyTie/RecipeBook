import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/HomePage";
import Recipe from "./pages/display-recipe/RecipeDisplayPage";
import RecipesPage from "./pages/recipes/RecipesPage";
import AddRecipe from "./pages/recipes/add/AddRecipePage";
import UpdateRecipe from "./pages/recipes/update/UpdateRecipePage";
import RemoveRecipe from "./pages/recipes/remove/RemoveRecipePage";
import NoPage from "./pages/nopage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/update-recipe" element={<UpdateRecipe />} />
          <Route path="/remove-recipe" element={<RemoveRecipe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
