import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({currentUser}) => {
  return (
    <>
      <div className="Heading3">
        <h1>Mix It Up</h1>
      </div>
      <div className="Pitch3">
        <p>
          Hello , Tired of the same old recipes? Need some new flavor in your
          life? Well welcome to Mix it up! Here you can browse a selection of
          recipes that will change your life. Our recipes are easy to make and
          delicious. They come with a list of all the ingredients you will need.
           Have a recipe you love? Share it! At Mix it up,
          we encourage users to share their plates. So what are you waiting for?
          Sign up and let's see what you can Mix up.
        </p>
      </div>
      {!currentUser && (<> <div className="SignUp3">
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
      <div className="SignIn3">
        <Link to="signin">
          <button>Sign In</button>
        </Link>
      </div></>)}
      {currentUser && (<> <div className="SignUp3">
        <Link to="/myrecipes">
          <button>My Recipes</button>
        </Link>
      </div>
      <div className="SignIn3">
        <Link to="new">
          <button>Add Recipe</button>
        </Link>
      </div></>)}
    </>
  );
};

export default Home;
