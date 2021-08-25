import axios from "axios";
import { api } from "./apiSettings";

export const httpClient = axios.create({
  baseURL: api.baseURL,
  headers: { "Content-type": "application/json" },
});
