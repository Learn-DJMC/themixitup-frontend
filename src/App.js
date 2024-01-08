import { useState } from 'react';
import './App.css';
import mockRecipes from './mockRecipes';
import mockUsers from './mockUsers';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import RecipesIndex from './Pages/RecipesIndex';
import RecipesProtectedIndex from './Pages/RecipesProtectedIndex';
import RecipesShow from './Pages/RecipesShow';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [recipe, setRecipe] = useState(mockRecipes)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="recipes" element={<RecipesIndex />} />
        <Route path="recipes-protected-index" element={<RecipesProtectedIndex />} />
        <Route path="/" element={< RecipesShow />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />


    </>
  );
}

export default App;
