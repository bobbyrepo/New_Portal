import axios from "axios"
import { baseUrl } from "./constant"

const apiKey = import.meta.env.VITE_API_KEY

export const getTopHeadlines = async () => {
    const url = `${baseUrl}/top-headlines?country=us&apiKey=${apiKey}`
    const response = await axios.get(url)
    return response
}

export const getByQuery = async (category: string) => {
    const url = `${baseUrl}/everything?q=${category}&sortBy=popularity&apiKey=${apiKey}`
    const response = await axios.get(url)
    return response
}