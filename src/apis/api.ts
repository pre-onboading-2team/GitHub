import axios from "axios";

export const BASE_URL =
  "https://api.github.com/repos/angular/angular-cli/issues";
const JSON_TYPE = "application/json";

const ACCESS_TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: `Base ${ACCESS_TOKEN}`,
    "Content-Type": JSON_TYPE,
  },
});
