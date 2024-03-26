import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavoritesTab = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        axios.get('/api/favorites')
        .then(response => setFavoriteRecipes(response.data))
        .catch(error => console.error('Failed to fetch favorites:', error));
    }, []);

    return (
        <div>
            <h2>Favorites</h2>
            <ul>
                {favoriteRecipes.map(recipe => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FavoritesTab;