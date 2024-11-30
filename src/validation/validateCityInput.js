const validateCityInput = (city) => {
    if (!city.trim()) return "City name is required.";
    if (city.length < 2) return "City name must be at least 2 characters.";
    if (city.length > 50) return "City name must not exceed 50 characters.";
    return null;
};

export default validateCityInput;