import { getRequest, ApiResponse } from './request';
import { baseUrl } from './constant';
import { NewsApiResponse } from './Types';

const apiKey = import.meta.env.VITE_API_KEY;

export const getTopHeadlines = async (
    quantity: number,
    pageNo?: number
): Promise<ApiResponse<NewsApiResponse>> => {
    const url = `${baseUrl}/top-headlines?country=us&pageSize=${quantity}${pageNo ? `&page=${pageNo}` : ''
        }&apiKey=${apiKey}`;
    return await getRequest<NewsApiResponse>(url);
};

export const getByQuery = async (
    category: string,
    quantity: number,
    pageNo?: number
): Promise<ApiResponse<NewsApiResponse>> => {
    const url = `${baseUrl}/everything?q=${category}&sortBy=relevancy&pageSize=${quantity}${pageNo ? `&page=${pageNo}` : ''
        }&apiKey=${apiKey}`;
    return await getRequest<NewsApiResponse>(url);
};