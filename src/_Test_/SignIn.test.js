import { render, screen } from "@testing-library/react";
import SignIn from "../Pages/SignIn";
import { BrowserRouter } from "react-router-dom";

describe("<SignIn />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
  });
  it("displays a heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /sign in/i,
      })
    ).toBeInTheDocument();
  });
  it("displays a UserName input label", () => {
    expect(screen.getByText(/username/i)).toBeInTheDocument();
  });
  it("displays a UserName input field with placeholder text", () => {
    expect(screen.getByPlaceholderText(/what is your user name\?/i));
  });
  it("displays a Password input label", () => {
    expect(screen.getByText(/password/i)).toBeInTheDocument();
  });
  it("displays a Password input field with placeholder text", () => {
    expect(screen.getByPlaceholderText(/what is your password\?/i));
  });
  it("displays a submit button", () => {
    expect(screen.getByRole("button", { name: /submit/i }));
  });
});
