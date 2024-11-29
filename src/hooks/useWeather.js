import { useCallback } from "react";
import { useState } from "react";
import { fetchWeather } from "../services/weatherApiService";

export default function useWeather() {
    const [locationInput, setLocationInput] = useState();
    const [weather, setWeather] = useState();
    const [isLoading, setIsLoading] = useState(false);


    const getWeather = useCallback(async (location) => {
        setIsLoading(true);
        try {
            let data = await fetchWeather(location);
            setWeather(data);
        } catch (err) {
            console.log(err.message);
        }
        setIsLoading(false);
    }, []);


    return { weather, locationInput, isLoading, setLocationInput, getWeather };
}
