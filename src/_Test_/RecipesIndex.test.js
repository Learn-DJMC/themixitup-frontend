import RecipesIndex from "../Pages/RecipesIndex";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import mockRecipes from "../mockRecipes";

describe("<RecipesIndex />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecipesIndex recipes={mockRecipes} />
      </BrowserRouter>
    );
  });
  it("displays a heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /Recipe Index/i,
      })
    ).toBeInTheDocument();
  });
  it("displays recipe cards with images", () => {
    mockRecipes.forEach((recipe) => {
      const regex = new RegExp(`^${recipe.title} image`, "i");
      expect(screen.getByRole("img", { name: regex }));
    });
  });
  it("displays recipe cards with titles", () => {
    mockRecipes.forEach((recipe) => {
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
    });
  });
  it("displays recipe cards with view buttons", () => {
    mockRecipes.forEach((recipe, index) => {
      expect(screen.getByTestId(`view-button-${index}`)).toBeInTheDocument();
    });
  });
  it("links view buttons to the correct recipe pages", () => {
    mockRecipes.forEach((recipe, index) => {
      expect(
        screen.getByTestId(`view-button-${index}`).closest("a")
      ).toHaveAttribute("href", `/show/${recipe.id}`);
    });
  });
  it("handles 'View' button clicks", () => {
    mockRecipes.forEach((recipe, index) => {
      userEvent.click(screen.getByTestId(`view-button-${index}`));
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
    });
  });
});
