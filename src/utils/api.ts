import axios from "axios"
import { baseUrl } from "./constant"

const apiKey = import.meta.env.VITE_API_KEY

export const getTopHeadlines = async (quantity: number, pageNo?: number) => {
    const url = `${baseUrl}/top-headlines?country=us&pageSize=${quantity}${pageNo ? `&page=${pageNo}` : ''}&apiKey=${apiKey}`
    const response = await axios.get(url)
    return response
}

export const getByQuery = async (category: string, quantity: number, pageNo?: number) => {
    const url = `${baseUrl}/everything?q=${category}&sortBy=relevancy&pageSize=${quantity}${pageNo ? `&page=${pageNo}` : ''}&apiKey=${apiKey}`
    const response = await axios.get(url)
    return response
}