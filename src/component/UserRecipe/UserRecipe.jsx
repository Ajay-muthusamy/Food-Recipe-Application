import React from "react";
import "../UserRecipe/UserRecipe.css";
import userprofile from "../../assets/users.png";

const UserRecipe = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No recipes available</div>;
  }

  return (
    <div>
      <div className="row ">
      {products.map((product, index) => (
        <div key={index} className="col-md-6 mb-4"> 
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-3  position-static">
                  <div className="userprofile d-flex gap-3 ">
                    <img src={userprofile} alt="" style={{ width: "50px" }} />
                    <p className="mt-1">{product.food}</p>
                  </div>
                  <p className="usern">@ajay_@2005</p>
                  <img
                    src="https://www.pngplay.com/wp-content/uploads/6/Golden-5-Star-Rating-PNG.png"
                    alt=""
                    style={{ width: "10%" }}
                    className="userprofileimg"
                  />
                  <h3 className="mt-0">{product.name}</h3>
                  <p className="card-text mb-auto">
                    {product.recipe}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary mt-4"
                    style={{ width: "40%" }}
                  >
                    Get Recipe
                  </button>
                </div>
                <div className="col-auto d-none d-lg-block">
                  {product.image && (
                    <img
                      src={URL.createObjectURL(product.image)}
                      alt={product.food}
                      width="250"
                      height="250"
                      className="bd-placeholder-img"
                    />
                  )}
                </div>
              </div>
            </div>
      ))}
      </div>
    </div>
  );
};

export default UserRecipe;
