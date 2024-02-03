import axios from "axios";

const api = axios.create({
  baseURL: "http://20.102.119.104:8080/v1",
  headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*"}
});

export default api;
