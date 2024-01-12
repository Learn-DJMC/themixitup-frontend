import RecipesShow from "../Pages/RecipesShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import mockRecipes from "../mockRecipes";

describe("<RecipesShow />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/show/1"]}>
        <Routes>
          <Route
            path="show/:id"
            element={<RecipesShow recipes={mockRecipes} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
  it("displays recipe title", () => {
    expect(screen.getByText(mockRecipes[0].title)).toBeInTheDocument();
  });
  it("displays recipe description", () => {
    expect(screen.getByText(mockRecipes[0].description)).toBeInTheDocument();
  });
  it("displays recipe ingredients", () => {
    const ingredients = mockRecipes[0].ingredients;
    const ingredient = ingredients.map((ingredient) =>
      screen.getByText(ingredient)
    );
    ingredient.forEach((ingredient) => {
      expect(ingredient).toBeInTheDocument();
    });
  });

  it("displays recipe instructions", () => {
    const instructions = mockRecipes[0].instructions;
    const instruction = instructions.map((instruction) =>
      screen.getByText(instruction)
    );
    instruction.forEach((instruction) => {
      expect(instruction).toBeInTheDocument();
    });
  });

  it("displays a back button", () => {
    expect(screen.getByRole("button", { name: /back/i }));
  });
});
