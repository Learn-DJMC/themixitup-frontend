import React from "react";
import { CardImg, CardBody, CardTitle, Button, Card } from "reactstrap";
import { NavLink } from "react-router-dom";

const RecipesIndex = ({ recipes }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Recipe Index</h1>
      <div className="index-card">
        {recipes.map((recipe, index) => {
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
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default RecipesIndex;
