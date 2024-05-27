import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";
import UserRecipe from "./component/UserRecipe/UserRecipe";
import MainContent from "./component/UserRecipe/MainContent";
import Footer from "./component/footer/footer";

const App = ({ addProduct, products }) => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="row-md-6 mb-2 m-5 text-white">
        <div className="col">
          <UserRecipe products={products} />
        </div>
      </div>
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
