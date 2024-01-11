import { render, screen } from "@testing-library/react";
import SignUp from "../Pages/SignUp";
import { BrowserRouter } from "react-router-dom";

describe("<SignUp />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
  });
  it("displays a heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /sign up/i,
      })
    ).toBeInTheDocument();
  });
  it("displays an Email input label", () => {
    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });
  it("displays an Email input field with placeholder text", () => {
    expect(screen.getByPlaceholderText(/what is your email\?/i));
  });
  it("displays a UserName input label", () => {
    expect(screen.getByText(/username/i)).toBeInTheDocument();
  });
  it("displays a UserName input field with placeholder text", () => {
    expect(screen.getByPlaceholderText(/what is your user name\?/i));
  });
  it("displays a Password input label", () => {
    expect(
      screen.getByText(/^(?!.*\bconfirm\b).*password.*$/i)
    ).toBeInTheDocument();
  });
  it("displays a Password input field with placeholder text", () => {
    expect(screen.getByPlaceholderText(/what is your password\?/i));
  });
  it("displays a Confirm Password input label", () => {
    expect(screen.getByText(/confirm password/i)).toBeInTheDocument();
  });
  it("displays a Confirm Password input field with placeholder text", () => {
    expect(screen.getByPlaceholderText(/retype your password\./i));
  });
  it("displays a submit button", () => {
    expect(screen.getByRole("button", { name: /submit/i }));
  });
});
