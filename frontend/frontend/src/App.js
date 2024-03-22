import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import RecipeList from './components/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/recipes" component={RecipeList} />
          <PrivateRoute exact path="/recipes/:id" component={RecipeDetail} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;