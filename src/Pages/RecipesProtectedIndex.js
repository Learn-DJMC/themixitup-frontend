import React from "react";
import { CardImg, CardBody, CardTitle, Button, Card } from "reactstrap";
import { NavLink } from "react-router-dom";

const RecipesProtectedIndex = ({ recipes, currentUser, deleteRecipe }) => {
  const myRecipes = recipes.filter(
    (recipe) => currentUser.id === recipe.user_id
  );
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Recipe Index</h1>
      <div className="index-card">
        {myRecipes.map((recipe, index) => {
          return (
            <Card key={index}>
              <CardImg
                alt={`${recipe.title} image`}
                src={recipe.image}
                className="index-img"
              />
              <CardBody>
                <CardTitle>{recipe.title}</CardTitle>
                <NavLink to={`/show/${recipe.id}`}>
                  <Button data-testid={`view-button-${index}`}>View</Button>
                </NavLink>
                <NavLink to={`/edit/${recipe.id}`}>
                  <Button data-testid={`edit-button-${index}`}>Edit</Button>
                </NavLink>
                <Button
                  data-testid={`delete-button-${index}`}
                  onClick={() => deleteRecipe(recipe.id)}
                >
                  Delete
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default RecipesProtectedIndex;
