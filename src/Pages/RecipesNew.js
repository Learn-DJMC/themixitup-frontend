import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const RecipesNew = ({ createRecipe, currentUser }) => {
  const navigate = useNavigate();
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    category: "default",
    dietary_restrictions: "default",
    rating: 0,
    description: "",
    ingredients: [],
    instructions: [],
    image: "",
    user_id: currentUser?.id,
  });

  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.name === "ingredients" || e.target.name === "instructions"
        ? e.target.value.split("\n")
        : e.target.value
    });
  };

  const handleSubmit = () => {
    createRecipe(newRecipe);
    navigate("/myrecipes");
  };
  return (
    <div className="recipe-new">
      <h1>Add Recipe</h1>
      <Form className="recipe-form">
        <div className="recipe-form-column1">
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Recipe Title"
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
              type="textarea"
              rows="10"
              onChange={handleChange}
            />
          </FormGroup>
          <Button className="buttons" onClick={handleSubmit}>Add Recipe</Button>
        </div>
      </Form>
    </div>
  );
};

export default RecipesNew;
