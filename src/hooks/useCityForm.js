import { useCallback, useState } from "react";
import validateCityInput from "../validation/validateCityInput";
import { fetchAutoComplete } from "../services/weatherApiService";
import debounce from "../utils/debounce";

export default function useCityForm(onSubmit) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [autoComplete, setAutoComplete] = useState([]);

    const debouncedGetAutoComplete = useCallback(debounce(getAutoComplete, 300), []);

    function handleChange(e) {
        let city = e.target.value;
        let validationError = validateCityInput(city);
        setCity(city);
        if (validationError) {
            setError(validationError);
        } else {
            debouncedGetAutoComplete(city);
            setError("");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        let validationError = validateCityInput(city);
        if (validationError) {
            setError(validationError);
            return;
        }
        setError("");
        setCity("");
        setAutoComplete([]);
        onSubmit(city);
    }

    async function getAutoComplete(location) {
        try {
            let data = await fetchAutoComplete(location);
            setAutoComplete(data);
        } catch (err) {
            setError(err?.message?.split(":")[1]?.trim() || "An unexpected error occurred");
        }
    };


    return { city, autoComplete, error, setCity, setError, handleChange, handleSubmit };
}
