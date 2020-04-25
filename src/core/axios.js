import axios from "axios";

axios.defaults.baseURL = "http://localhost:3003";
axios.defaults.headers.common["X-Authorization"] = window.localStorage["X-Authorization"];

window.axios = axios;

export default axios;
