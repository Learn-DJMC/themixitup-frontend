import { useState } from "react";
import "./App.css";
import mockRecipes from "./mockRecipes";
import mockUsers from "./mockUsers";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import RecipesIndex from "./Pages/RecipesIndex";
import RecipesProtectedIndex from "./Pages/RecipesProtectedIndex";
import RecipesShow from "./Pages/RecipesShow";
import RecipesEdit from "./Pages/RecipesEdit";
import RecipesNew from "./Pages/RecipesNew";
import SignIn from "./Pages/SignIn";
import SignOut from "./Pages/SignOut";
import SignUp from "./Pages/SignUp";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [recipes, setRecipes] = useState(mockRecipes);

  // const URL = "https://mixitup-backend.onrender.com"
  const URL = "http://localhost:3000/";

  const signout = () => {};

  const signin = () => {};

  const deleteRecipe = () => {};

  const createRecipe = () => {};

  const updateRecipe = () => {};

  return (
    <>
      <Header currentUser={currentUser} signout={signout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/recipes" element={<RecipesIndex recipes={recipes} />} />
        {currentUser && (
          <>
            <Route
              path="/myrecipes"
              element={
                <RecipesProtectedIndex
                  currentUser={currentUser}
                  recipes={recipes}
                  deleteRecipe={deleteRecipe}
                />
              }
            />
            <Route
              path="/new"
              element={
                <RecipesNew
                  createRecipe={createRecipe}
                  currentUser={currentUser}
                />
              }
            />
          </>
        )}
        <Route path="/show/:id" element={<RecipesShow recipes={recipes} />} />
        <Route path="/signin" element={<SignIn signin={signin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/edit/:id" element={<RecipesEdit recipes={recipes} updateRecipe={updateRecipe} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
