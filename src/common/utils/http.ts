import axios, { InternalAxiosRequestConfig } from "axios";

const authMiddleware = async (config: InternalAxiosRequestConfig) => {
  const session = JSON.parse(
    localStorage.getItem("user-data") || '{ "access_token": null }'
  );

  const accessToken = session?.access_token;
  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const responseErrorMiddleware = async (err: any) => {
//   const status = err.response?.status || 500;

//   if (status === 401) {
//     localStorage.remove("user-data");
//     window.location.replace("/login");
//   }

//   return Promise.reject(err);
// };

export const apiClient = axios.create({
  //TODO Use an env variable
  //baseURL: import.meta.env.NEXT_PUBLIC_SALIAJOB_API_BASE_URL,
  baseURL: "http://localhost:3000",
});

apiClient.interceptors.request.use(authMiddleware);
// apiClient.interceptors.response.use(responseErrorMiddleware);
