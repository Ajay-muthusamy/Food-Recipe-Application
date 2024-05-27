import React from "react";
import "../UserUpload/userupload.css";
import { Outlet, Link } from "react-router-dom";

const UserUpload = () => {
  return (
    <div>
      <div className="maincontainer">
        <div className="container formcontainer mt-2 ">
          
          <form className="w-20 bg-dark-blue ">
          <img
            src="https://www.foodygrocery.com/uploads/b/12c90fb61feda8cdc51385934696ac769233690ddce6973faba7b632e9a3cf39/Foody%20logo%20png%20with%20stroke2_1628835214.png?width=1200"
            alt=""
            style={{ width: "50%" }}
          />
            <h1 className="fs-4">Upload your own Recipe</h1>
            <div className="mb-2">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control "
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <Link to="/userRecipe">
            <button type="submit" className="btn btn-primary">
              Continue
            </button>
            </Link>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserUpload;
