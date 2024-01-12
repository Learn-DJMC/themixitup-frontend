import RecipesIndex from "../Pages/RecipesProtectedIndex";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import mockRecipes from "../mockRecipes";
import mockUsers from "../mockUsers";

describe("<RecipesProtectedIndex />", () => {
  const deleteRecipe = jest.fn();
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecipesIndex
          recipes={mockRecipes}
          currentUser={mockUsers[0]}
          deleteRecipe={deleteRecipe}
        />
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
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe) => {
      const regex = new RegExp(`^${recipe.title} image`, "i");
      expect(screen.getByRole("img", { name: regex }));
    });
  });
  it("displays recipe cards with titles", () => {
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe) => {
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
    });
  });
  it("displays recipe cards with view buttons", () => {
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe, index) => {
      expect(screen.getByTestId(`view-button-${index}`)).toBeInTheDocument();
    });
  });
  it("links view buttons to the correct recipe pages", () => {
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe, index) => {
      expect(
        screen.getByTestId(`view-button-${index}`).closest("a")
      ).toHaveAttribute("href", `/show/${recipe.id}`);
    });
  });
  it("handles 'View' button clicks", () => {
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe, index) => {
      userEvent.click(screen.getByTestId(`view-button-${index}`));
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
    });
  });
  it("displays recipe cards with edit buttons", () => {
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe, index) => {
      expect(screen.getByTestId(`edit-button-${index}`)).toBeInTheDocument();
    });
  });
  it("links edit buttons to the correct recipe edit pages", () => {
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe, index) => {
      expect(
        screen.getByTestId(`edit-button-${index}`).closest("a")
      ).toHaveAttribute("href", `/edit/${recipe.id}`);
    });
  });
  it("handles 'Edit' button clicks", () => {
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe, index) => {
      userEvent.click(screen.getByTestId(`edit-button-${index}`));
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
    });
  });
  it("displays recipe cards with delete buttons", () => {
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe, index) => {
      expect(screen.getByTestId(`delete-button-${index}`)).toBeInTheDocument();
    });
  });
  it("handles 'Delete' button clicks", () => {
    const myRecipes = mockRecipes.filter(
      (recipe) => mockUsers[0].id === recipe.user_id
    );
    myRecipes.forEach((recipe, index) => {
      userEvent.click(screen.getByTestId(`delete-button-${index}`));
    });
  });
});
