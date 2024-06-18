import React, { useState } from "react";
import "../UserUpload/userupload.css";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const UserUpload = () => {
  const [name, setName] = useState(""); 
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 
  const handleSubmit = async (event) => {
    event.preventDefault();

    setUsernameError("");
    setPasswordError("");
    setError(null); 

    if (!name.trim()) { 
      setUsernameError("Username is required");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }

    console.log("Form submitted with:", { name, password });

    try {
      const response = await axios.post(
        'http://localhost:6969/food/api/login',
        { name, password } 
      );
      navigate('/userRecipe');
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Failed to login. Please try again later.");
      }
    }
  };

  return (
    <div>
      <div className="maincontainer">
        <div className="container formcontainer mt-2">
          <form className="w-20 bg-dark-blue" onSubmit={handleSubmit}>
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
                className={`form-control ${usernameError ? "is-invalid" : ""}`}
                id="username"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)} // Updated to setName
              />
              {usernameError && (
                <div className="invalid-feedback">{usernameError}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${passwordError ? "is-invalid" : ""}`}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <div className="invalid-feedback">{passwordError}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Continue
            </button>
          </form>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserUpload;
