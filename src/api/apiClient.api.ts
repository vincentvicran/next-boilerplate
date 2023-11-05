import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { getCookie } from "src/helpers";

// MARK: - instance
const instance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// MARK: - interceptor
instance.interceptors.request.use(async (request) => {
  const token = getCookie("@token");
  if (token && request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

// MARK: - getParsedUrl
const getParsedUrl = (
  url: string,
  params?: { [key: string]: number | string }
) => {
  if (!params) {
    return url;
  }

  let urlString = "";
  Object.keys(params).forEach((key, index, array) => {
    if (params[key] !== undefined && params[key] !== null) {
      urlString += `${index === 0 ? "?" : ""}${key}=${params[key]}${
        index !== array.length - 1 ? "&" : ""
      }`;
    }
  });

  return url + urlString;
};

// MARK: api
const api =
  <
    ApiResponse extends unknown,
    ApiParams extends { [key: string]: number | string } = {},
    ApiBody extends unknown = {}
  >(
    method: "get" | "delete" | "head" | "options" | "post" | "put" | "patch"
  ) =>
  (
    url: string,
    params?: ApiParams,
    data?: ApiBody,
    config?: Omit<
      AxiosRequestConfig<any>,
      "baseURL" | "url" | "method" | "data"
    >
  ): Promise<AxiosResponse<ApiResponse>> =>
    instance({ url: getParsedUrl(url, params), method, data, ...config });

export { instance, api };
