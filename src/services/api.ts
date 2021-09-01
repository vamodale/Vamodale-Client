import axios from "axios";

const api = axios.create({
  baseURL: "https://vamodale.herokuapp.com/v1",
  headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imd1aUB0ZXN0ZTguY29tIiwib3BlbmlkIjoiNTU1NTY2NjgiLCJleHAiOjE2MzEwODY2NjB9.jRoZZJX5e5Ya5TIzKmCAveh3mWrdkgbF7PuM4RVqfOU',
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*"}
});

export default api;