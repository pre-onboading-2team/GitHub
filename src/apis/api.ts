import axios from "axios";

const BASE_URL = "https://api.github.com/repos/angular/angular-cli/";
const JSON_TYPE = "application/json";

// TODO : 환경 변수로 변경하기
const ACCESS_TOKEN = "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";

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: `Base ${ACCESS_TOKEN}`,
    "Content-Type": JSON_TYPE,
  },
});
