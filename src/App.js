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



const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [recipe, setRecipe] = useState(mockRecipes)

  return (
    <>
      <Header />
      <AboutUs />
      <NotFound />
      <RecipesIndex />
      <RecipesProtectedIndex />
      < RecipesShow />
      <SignIn />
      <SignUp />
      <Footer />

      <div>
        <h2> Mix it up ! </h2>
      </div>
    </>
  );
}

export default App;
