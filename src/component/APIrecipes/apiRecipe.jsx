import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "../APIrecipes/apiRecipe.css";

const apiRecipe = () => {
  const [searchFood, setSearchFood] = useState("");
  const [food, setFood] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (searchFood) {
      async function foodApiCall() {
        const result = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${searchFood}&app_id=28d912a4&app_key=36feae9e5595098a478ab51daca3ed0d`
        );
        const foodData = await result.json();
        console.log(foodData);
        setFood(foodData.hits);
      }
      foodApiCall();
    }
  }, [searchFood]);

  const handleShow = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearchFood(form.elements.query.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="api-container">
          <form
            onSubmit={handleSubmit}
            className="mb-4 gap-3 d-flex justify-content-center mt-5"
          >
            <input
              type="text"
              name="query"
              className="form-control"
              placeholder="Search for a recipe"
              style={{ width: "20%" }}
            />
            <button type="submit" className="btn btn-primary mt-2">
              Search
            </button>
            <br />
          </form>
          <h1 className="text-center text-white fs-1">Foody Recipies</h1>
        </div>

        {food.length > 0 ? (
          food.map((item, index) => (
            <div className="col-md-4 mt -3 mb-4 " key={index}>
              <div className="card bg-dark-blue" style={{ width: "18rem" }}>
                <img
                  src={item.recipe.image}
                  className="card-img-top"
                  alt={item.recipe.label}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.recipe.label}</h5>
                  <p className="card-text">{item.recipe.label}</p>
                  <p>{item.recipe.source}</p>
                  <Button
                    variant="primary"
                    onClick={() => handleShow(item.recipe)}
                  >
                    View Recipe
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>

      {selectedRecipe && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe.label}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedRecipe.image}
              className="img-fluid mb-3"
              alt={selectedRecipe.label}
            />
            <p>
              <strong>Source: </strong>
              {selectedRecipe.source}
            </p>
            <p>
              <strong>Ingredients: </strong>
            </p>
            <ul>
              {selectedRecipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>
              <strong>Instructions: </strong>
            </p>
            <a
              href={selectedRecipe.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View full recipe
            </a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default apiRecipe;
