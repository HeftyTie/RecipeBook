import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/HomePage";
import Recipes from "./pages/recipes/RecipesPage";
import NoPage from "./pages/nopage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
