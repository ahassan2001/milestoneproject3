import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RecipeList.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const API_KEY = 'c15c17cf69c64b32a1cb8b9ae9afbcb2';
      const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + API_KEY;
      try {
        const response = await axios.get(url);
        console.log(response);
        setRecipes(response.data.results);
      } catch (error) {
        console.log('Failed to fetch recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSaveRecipe = async (recipeId) => {
    try {
      const response = await axios.post('', { recipeId });
      console.log('Recipe saved:', response.data);
    } catch (error) {
      console.log('Failed to save recipe:', error);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.title}
            <button className="saveButton" onClick={() => handleSaveRecipe(recipe.id)}>Save</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;