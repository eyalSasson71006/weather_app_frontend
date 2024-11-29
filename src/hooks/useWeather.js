import { useState } from "react";
import { fetchWeather } from "../services/weatherApiService";

export default function useWeather() {
    const [locationInput, setLocationInput] = useState();
    const [weather, setWeather] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    const getWeather = async (location) => {
        setIsLoading(true);
        setError(null);
        try {
            let data = await fetchWeather(location);
            setWeather(data);
        } catch (err) {
            setError(err.message.split(":")[1].trim());
        }
        setIsLoading(false);
    };


    return { weather, locationInput, isLoading, error, setLocationInput, getWeather };
}
