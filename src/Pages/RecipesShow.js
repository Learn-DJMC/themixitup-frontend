import React from "react";
import { NavLink, useParams } from "react-router-dom";

const RecipesShow = ({ recipes }) => {
  let { id } = useParams();
  const recipe = recipes?.find((recipe) => recipe.id === +id);

  return (
    <div className="recipe-show">
      <div className="recipe-container">
        <div className="recipe-column1">
          <h1 className="recipe-title">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <p className="recipe-description">{recipe.description}</p>
        </div>
        <div className="recipe-column2">
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-column3">
          <h2>Instructions:</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
      <NavLink to="/recipes">
        <button>Back</button>
      </NavLink>
    </div>
  );
};

export default RecipesShow;
