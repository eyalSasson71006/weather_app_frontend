import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import useWeather from "../../hooks/useWeather";

export default function HomePage() {
	const {
		isLoading,
		apiError,
		weather,
		locationInput,
		setLocationInput,
		getWeather,
		setWeather,
	} = useWeather();
	const [toggle, setToggle] = useState("search");
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.matchMedia("(max-width: 768px)").matches);
		};
		checkIsMobile();
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		mediaQuery.addEventListener("change", checkIsMobile);
		return () => mediaQuery.removeEventListener("change", checkIsMobile);
	}, []);

	useEffect(() => {
		if (!locationInput) return;
		getWeather(locationInput);
	}, [locationInput]);

	return (
		<div className={styles.homePage}>
			{(!isMobile || toggle === "search") && (
				<div className={styles.homePage__formBox}>
					<SearchForm
						setLocationInput={setLocationInput}
						isLoading={isLoading}
						weather={weather}
						apiError={apiError}
						setToggle={setToggle}
					/>
				</div>
			)}
			{(!isMobile || toggle === "weather") && (
					<WeatherCard
						weather={weather}
						setWeather={setWeather}
						setToggle={setToggle}
					/>
			)}
		</div>
	);
}
