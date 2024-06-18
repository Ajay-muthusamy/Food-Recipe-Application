import React, { useState } from "react";
import "../UserUpload/userupload.css";
import { Outlet, Link } from "react-router-dom";
import Axios from "axios";

const UserRecipeUpload = ({ addProduct }) => {
  const [food, setFood] = useState("");
  const [name, setName] = useState("");
  const [shortdisc, setshortdisc] = useState("");
  const [recipe, setRecipe] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProduct({ food, name,shortdisc, recipe,image });
    try {
      const response = await Axios.post('http://localhost:6969/food/add', {
        food,
        name,
        shortdisc,
        recipe
      });
    
      setFood("");
      setName("");
      setshortdisc("");
      setRecipe("");
      setImage(null);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="uploadconatainer">
      <form onSubmit={handleSubmit} className="container mt-0 bg-dark-blue uploadfilescontainer">
        <img
          src="https://www.foodygrocery.com/uploads/b/12c90fb61feda8cdc51385934696ac769233690ddce6973faba7b632e9a3cf39/Foody%20logo%20png%20with%20stroke2_1628835214.png?width=1200"
          alt=""
          style={{ width: "20%" }}
        />
        <div className="mb-3">
          <label htmlFor="food" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="food"
            name="name"
            placeholder="Enter your Name"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="shortdisc"
            placeholder="Recipe name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Short Description</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="FoodTitle"
            placeholder="Recipe name"
            value={shortdisc}
            onChange={(e) => setshortdisc(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="recipe" className="form-label">Recipe *(step by step)</label>
          <textarea
            className="form-control"
            id="recipe"
            name="recipe"
            rows="3"
            placeholder="Type your Recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Food Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-success" style={{ width: "10%" }}>Add</button>
        <Link to="/" className="btn btn-primary ms-2" style={{ width: "10%" }}>Home Page</Link>
      </form>
      <Outlet />
    </div>
  );
};

export default UserRecipeUpload;
