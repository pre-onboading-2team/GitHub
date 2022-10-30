import axios from "axios";

export const baseUrl = "https://api.github.com/repos/angular/angular-cli/";

export const API = axios.create({
    baseURL: baseUrl,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
});


