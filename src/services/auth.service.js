import axios from 'axios';
import authHeader from "@/services/auth-header";

const API_URL = 'http://ws.ultimatex.tech:8000/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.token));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      username: user.username,
      password: user.password,
    });
  }

  getUser() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new AuthService();
