import React, { useState } from "react";
import "../UserRecipe/UserRecipe.css";
import userprofile from "../../assets/users.png";
import { Modal, Button } from 'react-bootstrap';

const UserRecipe = ({ products }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [show, setShow] = useState(false);

  if (!products || products.length === 0) {
    return <div>No recipes available</div>;
  }

  const handleShow = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-3 position-static">
                <div className="userprofile d-flex gap-3">
                  <img src={userprofile} alt="" style={{ width: "50px" }} />
                  <p className="mt-1">{product.food}</p>
                </div>
                <img
                  src="https://www.pngplay.com/wp-content/uploads/6/Golden-5-Star-Rating-PNG.png"
                  alt=""
                  style={{ width: "10%" }}
                  className="userprofileimg"
                />
                <h3 className="mt-0">{product.name}</h3>
                <p className="card-text mb-auto">{product.shortdisc}</p>
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  style={{ width: "40%" }}
                  onClick={() => handleShow(product)}
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

        <div className="">
      {selectedRecipe && (
        <Modal show={show} onHide={handleClose} className="bg-dark">
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe.food}'s Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Recipe Name:</strong> {selectedRecipe.name}</p>
            <p><strong>Instructions:</strong> {selectedRecipe.recipe}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      </div>
    </div>
  );
};

export default UserRecipe;
