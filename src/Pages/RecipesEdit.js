import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const RecipesEdit = ({ recipes, updateRecipe, currentUser }) => {
const { id }  = useParams()

let currentRecipe = recipes?.find((recipes) => recipes.id === +id)
const navigate = useNavigate();
  const [editRecipe, setEditRecipe] = useState({
    title: currentRecipe?.title,
    category: currentRecipe?.category,
    dietary_restrictions: currentRecipe?.dietary_restrictions,
    rating: currentRecipe?.rating,
    description: currentRecipe?.description,
    ingredients: [currentRecipe?.ingredients],
    instructions: [currentRecipe?.instructions],
    image: currentRecipe?.image,
    user_id: currentUser?.id,
  });

  const handleChange = (e) => {
    setEditRecipe({
      ...editRecipe,
      [e.target.name]: e.target.name === "ingredients" || e.target.name === "instructions"
        ? e.target.value.split("\n")
        : e.target.value
    });
  };

  const handleSubmit = () => {
    updateRecipe(editRecipe, currentRecipe?.id);
    navigate("/myrecipes");
  };
  return (
    <div className="recipe-Edit">
      <h1>Edit Recipe</h1>
      <Form className="recipe-form">
        <div className="recipe-form-column1">
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Recipe Title"
              value={editRecipe?.title}
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="Description"
              value={editRecipe?.description}
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              id="image"
              name="image"
              placeholder="Image"
              value={editRecipe?.image}
              type="url"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <div className="recipe-form-column2">
          <FormGroup>
            <Label for="ingredients">Ingredients</Label>
            <Input
              id="ingredients"
              name="ingredients"
              placeholder="Ingredients (press enter after each)"
              value={editRecipe?.ingredients}
              type="textarea"
              rows="10"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <div className="recipe-form-column3">
          <FormGroup>
            <Label for="instructions">Instructions</Label>
            <Input
              id="instructions"
              name="instructions"
              placeholder="Instructions (press enter after each)"
              value={editRecipe?.instructions}
              type="textarea"
              rows="10"
              onChange={handleChange}
            />
          </FormGroup>
          <Button onClick={handleSubmit}>Submit Edited Recipe</Button>
        </div>
      </Form>
    </div>
  );
};

export default RecipesEdit;
