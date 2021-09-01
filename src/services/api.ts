import axios from "axios";

const api = axios.create({
  baseURL: "https://vamodale.herokuapp.com/v1",
  headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*"}
});

export default api;