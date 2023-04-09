const PROD_BACKEND_API_URL = "https://sdi-2023-example.strangled.net/api";
const DEV_BACKEND_API_URL = "http://127.0.0.1:8000/api";

export const BACKEND_API_URL =
	process.env.NODE_ENV === "development" ? DEV_BACKEND_API_URL : PROD_BACKEND_API_URL;
