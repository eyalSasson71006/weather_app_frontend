import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export const fetchWeather = async (location) => {    
    try {
        const response = await axios.get(`${BASE_URL}/${location}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data;
            throw new Error(errorMessage);
        } else {
            throw new Error("An unexpected error occurred. Please try again.");
        }
    }
};
