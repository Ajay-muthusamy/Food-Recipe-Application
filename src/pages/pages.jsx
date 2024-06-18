import React from 'react';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import UserUpload from '../component/UserUpload/UserUpload';
import UserRecipeUpload from '../component/UserUpload/UserRecipeUpload';
import ApiRecipe from '../component/APIrecipes/apiRecipe';
import AdminDashboard from '../component/Admin_Dashboard/adminDashboard';
import Register from '../component/register/register'

const Pages = () => {
  const [products, setProducts] = useState([]);
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App addProduct={addProduct} products={products} />} />
      <Route path="/user" element={<UserUpload />} />
        <Route path="/userRecipe" element={<UserRecipeUpload addProduct={addProduct} />} />
        <Route path="/apirecipe" element={ <ApiRecipe /> } />
        <Route path="/adminDashboard" element={ <AdminDashboard /> } />
        <Route path="/Register" element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
