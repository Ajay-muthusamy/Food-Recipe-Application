import React, { useState } from "react";
import "../UserUpload/userupload.css";
import { Outlet, Link } from "react-router-dom";

const UserRecipeUpload = ({ addProduct }) => {
  const [food, setFood] = useState("");
  const [name, setName] = useState("");
  const [recipe, setRecipe] = useState("");
  const [image, setImage] = useState(null);
    console.log(food);
    console.log(name);
    console.log(recipe);
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ food, name, recipe, image });
    setFood("");
    setName("");
    setRecipe("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="uploadconatainer">
      <form
        onSubmit={handleSubmit}
        className="container mt-0 bg-dark-blue uploadfilescontainer "
      >
        <img
          src="https://www.foodygrocery.com/uploads/b/12c90fb61feda8cdc51385934696ac769233690ddce6973faba7b632e9a3cf39/Foody%20logo%20png%20with%20stroke2_1628835214.png?width=1200"
          alt=""
          style={{ width: "20%" }}
        />
        <div className="mb-3">
          <label htmlFor="food" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="food"
            placeholder="Enter food"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipe" className="form-label">
            Recipe *(step by step)
          </label>
          <textarea
            className="form-control"
            id="recipe"
            rows="3"
            placeholder="Enter recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Food Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          style={{ width: "10%" }}
        >
          Add
        </button>
        <Link to="/">
          <button
            type="button"
            className="btn btn-primary ms-2"
            style={{ width: "10%" }}
          >
            Home Page
          </button>
        </Link>
      </form>
      <Outlet />
    </div>
  );
};

export default UserRecipeUpload;
