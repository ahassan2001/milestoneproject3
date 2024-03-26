import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import RecipeList from './components/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import PrivateRoute from './components/PrivateRoutes';
import FavoritesTab from './components/FavoritesTab';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<FavoritesTab />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;