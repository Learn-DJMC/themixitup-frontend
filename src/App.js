import { useState, useEffect } from "react";
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
  const [currentUser, setCurrentUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

  // const URL = "https://mixitup-backend.onrender.com"
  const URL = "http://localhost:3000";

  const signout = () => {
    fetch(`${URL}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setCurrentUser(null);
      })
      .catch((error) => console.log("log out errors: ", error));
  };

  const signin = (userInfo) => {
    fetch(`${URL}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload));
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const signup = (userInfo) => {
    fetch(`${URL}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload));
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const readReacipes = () => {
    fetch(`${URL}/recipes`)
      .then((response) => response.json())
      .then((payload) => setRecipes(payload))
      .catch((error) => console.log(error))
  };

  const createRecipe = (recipe) => {
    fetch(`${URL}/myrecipes`, {
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readReacipes())
      .catch((errors) => console.log(errors))
  };

  const deleteRecipe = (id) => { 
    fetch(`${URL}/recipes/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method:"DELETE"
    })
    .then((response) => response.json())
    .then(() => readReacipes())
    .catch((errors) => console.log("delete errors:", errors))
  };



  const updateRecipe = ( recipe, id ) => { 
    fetch(`${URL}/recipes/${id}`,{
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json"
      },
      method:"PATCH"
    })
    .then((response) => response.json())
    .then(() => readReacipes())
    .catch((errors) => console.log("Recipe update error:", errors))
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
    readReacipes();
  }, []);

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
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/signout" element={<SignOut />} />
        <Route
          path="/edit/:id"
          element={
            <RecipesEdit recipes={recipes} updateRecipe={updateRecipe} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
