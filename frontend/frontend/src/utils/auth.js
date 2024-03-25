import axios from 'axios';

const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5001/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data.user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

export { login, logout };
