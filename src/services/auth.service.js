import axios from 'axios';
import authHeader from "@/services/auth-header";

const API_URL = 'https://ultimatex.tech:9000/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'authorization', {
        email: user.email,
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
    return axios.post(API_URL + 'registration', {
      email: user.email,
      password: user.password,
      name: user.name,
      last_name: user.last_name
    });
  }

  getUser() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new AuthService();
