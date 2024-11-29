import { useState } from "react";
import validateCityInput from "../validation/validateCityInput";

export default function useCityForm(onSubmit) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    function handleChange(e) {
        let city = e.target.value;
        let validationError = validateCityInput(city);
        if (validationError) {
            setError(validationError);
        } else {
            setError("");
            setCity(city);
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
        onSubmit(city);
    }


    return { city, error, handleChange, handleSubmit };
}
