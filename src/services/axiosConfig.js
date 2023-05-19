import axios from "axios";

const urlLocal = "http://localhost:3001/";
const urlDev = "http://ec2-52-20-96-39.compute-1.amazonaws.com:3001/";
const urlTest = "http://ec2-52-20-96-39.compute-1.amazonaws.com:3001/";
const urlProd = "http://ec2-52-20-96-39.compute-1.amazonaws.com:3001/";

export const AxiosConfig = axios.create({ baseURL: urlLocal });

export default AxiosConfig;
