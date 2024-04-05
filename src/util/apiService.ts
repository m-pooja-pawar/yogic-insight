import axios, {AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig} from 'axios';
import {enqueueSnackbar} from 'notistack';

import {getSelectedLanguage, getApiAuthorization, setNextRedirectionUrl, setSessionExpired} from './localStorageHelper';
import {handleLogoutSuccess} from './loginHelper';

export class ApiService {
  private static instance: ApiService;
  private api: AxiosInstance;

  private constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    });

    // Add request interceptors
    this.api.interceptors.request.use(this.handleRequest, this.handleRequestError);

    // Add response interceptors
    this.api.interceptors.response.use(this.handleResponse, this.handleResponseError);
  }

  private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    // Add headers, authentication, or other behaviors here
    // For example: config.headers['Authorization'] = 'Bearer token';
    config.headers.Authorization = getApiAuthorization();
    config.headers['Accept-Language'] = getSelectedLanguage();
    return config;
  }

  private handleRequestError(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleResponseError(error: AxiosError): Promise<AxiosError> {
    // Handle response errors (e.g., 401 Unauthorized)
    if (401 === error.response?.status || 403 === error.response?.status) {
      handleLogoutSuccess();
      setNextRedirectionUrl(location.pathname);
      setSessionExpired('true');
      setTimeout(() => {
        location.href = '/login';
      }, 100);
    } else {
      const responseData = error.response?.data as any;
      enqueueSnackbar(responseData?.msg || error.message, {variant: 'error'});
    }

    return Promise.reject(error);
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  public async get<T>(resource: string, params?: Record<string, any>): Promise<T> {
    try {
      return this.api.get(resource, {params});
    } catch (error) {
      throw error;
    }
  }

  public async post<T>(resource: string, data?: any): Promise<T> {
    try {
      return this.api.post(resource, data);
    } catch (error) {
      throw error;
    }
  }

  public async patch<T>(resource: string, data?: any): Promise<T> {
    try {
      return this.api.patch(resource, data);
    } catch (error) {
      throw error;
    }
  }

  public async put<T>(resource: string, data?: any): Promise<T> {
    try {
      return this.api.put(resource, data);
    } catch (error) {
      throw error;
    }
  }

  // Add more methods for DELETE, etc.
}
