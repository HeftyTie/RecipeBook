import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/HomePage";
import Recipe from "./pages/RecipeDisplayPage";
import RecipesPage from "./pages/RecipesPage";
import ManageRecipeRecipe from "./pages/ManageRecipePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/manage-recipe/:id?" element={<ManageRecipeRecipe />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
