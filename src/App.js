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
import SignIn from "./Pages/SignIn";
import SignOut from "./Pages/SignOut";
import SignUp from "./Pages/SignUp";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[null]);
  const [recipes, setRecipes] = useState(mockRecipes);

  const signout = () => {};

  const signin = () => {};

  return (
    <>
      <Header currentUser={currentUser} signout={signout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/recipes" element={<RecipesIndex recipes={recipes} />} />
        {currentUser && (
          <Route path="/myrecipes" element={<RecipesProtectedIndex />} />
        )}
        <Route path="/show/:id" element={<RecipesShow recipes={recipes} />} />
        <Route path="/signin" element={<SignIn signin={signin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
