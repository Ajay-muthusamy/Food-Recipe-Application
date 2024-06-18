import React from 'react';
import Modal from 'react-modal';
import '../UserRecipe/RecipePopup.css';

Modal.setAppElement('#root'); 

const RecipePopup = ({ isOpen, onRequestClose, recipe }) => {
  if (!recipe) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Recipe Popup"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose} className="close-btn">X</button>
      <h2>{recipe.name}</h2>
      <p>{recipe.shortdisc}</p>
      <h4>Recipe:</h4>
      <p>{recipe.recipe}</p>
    </Modal>
  );
};

export default RecipePopup;
