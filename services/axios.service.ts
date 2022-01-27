import axios from "axios";

const server = axios.create({
  baseURL: "https://app.subsocial.network/subid/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default server;