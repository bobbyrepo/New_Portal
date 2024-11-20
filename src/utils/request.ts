import axios, { AxiosRequestConfig } from 'axios';

export interface RequestError extends Error {
    status?: number;
    details?: any;
}

export interface ApiResponse<T> {
    data?: T;
    error?: RequestError | undefined;
}

export const getRequest = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
    try {
        const response = await axios.get<T>(url, config);
        return { data: response.data };
    } catch (error: any) {
        const status = error.response?.status;
        const details = error.response?.data;
        return {
            error: {
                message: `Failed to fetch data from ${url}`,
                status,
                details,
                name: "RequestError",
            },
        };
    }
};