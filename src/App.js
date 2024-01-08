import { useState } from 'react';
import './App.css';
import mockRecipes from './mockRecipes';
import mockUsers from './mockUsers';



const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [recipe, setRecipe] = useState(mockRecipes)
  return (
    <div>
   <h2> Mix it up ! </h2>
    </div>
  );
}

export default App;
