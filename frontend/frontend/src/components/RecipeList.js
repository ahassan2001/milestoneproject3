import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const API_KEY = 'c15c17cf69c64b32a1cb8b9ae9afbcb2';
      const url = 'https://api.spoonacular.com/recipes/complexSearch';
      try {
        const response = await axios.get(url);
        setRecipes(response.data);
      } catch (error) {
        console.log('Failed to fetch recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;