import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export const fetchWeather = async (location) => {    
    try {
        const response = await axios.get(`${BASE_URL}/${location}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};
