import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-server-poap.onrender.com/",
});

export default instance;
