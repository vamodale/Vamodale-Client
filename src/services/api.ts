import axios from "axios";

const api = axios.create({
  baseURL: "https://vamodale.herokuapp.com/v1",
});

export default api;