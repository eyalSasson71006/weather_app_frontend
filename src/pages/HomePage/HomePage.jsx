import React, { useEffect } from "react";
import styles from "./HomePage.module.css";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import useWeather from "../../hooks/useWeather";

export default function HomePage() {
	const {
		isLoading,
		weather,
		locationInput,
		setLocationInput,
		getWeather,
	} = useWeather();

	useEffect(() => {
		if (!locationInput) return
		getWeather(locationInput);
	}, [locationInput]);
	
	return (
		<div className={styles.homePage}>
			<div className={styles.homePage__formBox}>
				<SearchForm
					setLocationInput={setLocationInput}
					isLoading={isLoading}
					weather={weather}
				/>
			</div>
			<div className={styles.homePage__weatherCard}>
				<WeatherCard
					weather={weather}
				/>
			</div>
		</div>
	);
}
