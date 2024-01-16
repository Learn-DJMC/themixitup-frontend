import RecipesEdit from "../Pages/RecipesEdit";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import mockUsers from "../mockUsers";

describe("<RecipesEdit />", () => {
  const updateRecipe = jest.fn()
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecipesEdit currentUser={mockUsers[0]} updateRecipe={updateRecipe} />
      </BrowserRouter>
    );
  });
  it("displays a heading", () => {
    expect(
      screen.getByRole("heading", { name: /Edit Recipe/i })
    ).toBeInTheDocument();
  });
  it("updates state when input fields change, title", () => {
    userEvent.type(screen.getByLabelText(/title/i), "Test Recipe");
    expect(screen.getByLabelText(/title/i).value).toBe("Test Recipe");
  });
  it("updates state when input fields change, description", () => {
    userEvent.type(screen.getByLabelText(/description/i), "Test Description");
    expect(screen.getByLabelText(/description/i).value).toBe(
      "Test Description"
    );
  });
  it("updates state when input fields change, image", () => {
    userEvent.type(screen.getByLabelText(/image/i), "www.test.com");
    expect(screen.getByLabelText(/image/i).value).toBe("www.test.com");
  });
  it("updates state when input fields change, ingredients", () => {
    userEvent.type(
      screen.getByLabelText(/ingredients/i),
      "Ingredient 1 Ingredient 2, Ingredient 3"
    );
    expect(screen.getByLabelText(/ingredients/i).value).toBe(
      "Ingredient 1 Ingredient 2, Ingredient 3"
    );
  });
  it("updates state when input fields change, instructions", () => {
    userEvent.type(
      screen.getByLabelText(/instructions/i),
      "Step 1 Step 2, Step 3"
    );
    expect(screen.getByLabelText(/instructions/i).value).toBe(
      "Step 1 Step 2, Step 3"
    );
  });
});
