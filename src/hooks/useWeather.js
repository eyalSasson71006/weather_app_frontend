import { useState } from "react";
import { fetchWeather } from "../services/weatherApiService";

export default function useWeather() {
    const [locationInput, setLocationInput] = useState();
    const [weather, setWeather] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState();


    const getWeather = async (location) => {
        setIsLoading(true);
        setApiError(null);
        try {
            let data = await fetchWeather(location);
            setWeather(data);
        } catch (err) {
            setApiError(err?.message?.split(":")[1].trim());
        }
        setIsLoading(false);
    };


    return { weather, locationInput, isLoading, apiError, setLocationInput, getWeather };
}
