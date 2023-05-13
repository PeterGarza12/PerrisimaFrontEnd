import axios from "axios";

const urlDev = "http://localhost:3001/";
const urlTest = "";
const urlProd = "";

export const AxiosConfig = axios.create({ baseURL: urlDev });

export default AxiosConfig;
