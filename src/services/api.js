import axios from "axios";
import { API_KEY, BASE_URL, SEARCH_URL } from "../config/api_config";

export const getList = async ({category, type}) => {
    const url = BASE_URL;
    const api = API_KEY;
    try {
        const response = await axios.get(`${url}${category}/${type}?api_key=${api}`); 

        const listResults = response.data.results;
        return listResults
    } catch(error) {
        console.error("Error fetching API:", error);
        throw error;
    }
}

export const getSearchResult = async ({ type, query }) => {
    const url = SEARCH_URL;
    const api = API_KEY;
    try {
        const response = await axios.get(`${url}${type}?query=${query}&api_key=${api}`); 

        const searchResults = response.data.results;
        return searchResults
    } catch(error) {
        console.error("Error fetching API:", error);
        throw error;
    }
}