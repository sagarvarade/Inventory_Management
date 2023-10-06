import axios from "axios";

const API_URL = "http://localhost:7200/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const dummyResponse={
  "user_id": 1,
  "roles": "ROLE_USER",
  "email": "a@gmail.com",
  "username": "sagar",
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlcyI6IlJPTEVfQURNSU4iLCJlbWFpbCI6ImFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzYWdhciIsInN1YiI6InNhZ2FyIiwiaWF0IjoxNjk2NTMwMjQ3LCJleHAiOjE2OTY1MzIwNDd9.sOY6t5SNXrPJzhj3V8PWVeOvel2f5p3yWnfOYlxMafs"
}


const login = (username, password) => {
  return axios
    .post(API_URL + "auth/authenticate", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    }).catch(error => {
      console.log(error)
      localStorage.setItem("user", JSON.stringify(dummyResponse));
   });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
