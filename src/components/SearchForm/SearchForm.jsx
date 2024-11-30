import React, { useEffect } from "react";
import styles from "./SearchForm.module.css";
import formatDate from "../../utils/dateFormat";
import Spinner from "../spinner/Spinner";
import useCityForm from "../../hooks/useCityForm";
import SearchAutoComplete from "../SearchAutoComplete/SearchAutoComplete";
import useAutoComplete from "../../hooks/useAutoComplete";

export default function SearchForm({
	isLoading,
	weather,
	apiError,
	setToggle,
	getWeather,
}) {
	const {
		city,
		autoComplete,
		error,
		setCity,
		setError,
		handleChange,
		handleSubmit,
	} = useCityForm(getWeather);

	const { currentIndex, listenToArrowKeys, listRef } = useAutoComplete(
		autoComplete,
		(input) => {
			getWeather(input);
			setCity("");
		}
	);

	useEffect(() => {
		if (!apiError) return;
		setError(apiError);
	}, [apiError]);

	useEffect(() => {
		if (!error && weather) setToggle("weather");
	}, [weather]);

	return (
		<article className={styles.searchForm}>
			<img
				src="./fintekLogo.svg"
				alt="fintek logo"
				className={styles.searchForm__fintekLogo}
			/>
			<h3 className={styles.searchForm__title}>
				Use our weather app to see the weather around the world
			</h3>
			<form className={styles.searchForm__inputForm}>
				<label id="cityLabel" htmlFor="cityInput">
					City name
				</label>
				<div className={styles.searchForm__inputBox}>
					<input
						onChange={handleChange}
						onKeyDown={listenToArrowKeys}
						value={city}
						id="cityInput"
						type="text"
						placeholder="Enter city name"
						autoComplete="off"
						aria-labelledby="cityLabel"
					/>
					<button
						disabled={!city || error || isLoading}
						onClick={handleSubmit}
					>
						{isLoading ? <Spinner /> : "Check"}
					</button>
				</div>
				<SearchAutoComplete
					error={error}
					autoComplete={autoComplete}
					city={city}
					setCity={setCity}
					getWeather={getWeather}
					currentIndex={currentIndex}
					listRef={listRef}
				/>
				{error && <p className={styles.searchForm__error}>{error}</p>}
			</form>
			{weather && (
				<footer className={styles.searchForm__footer}>
					<div className={styles.searchForm__location}>
						<p>latitude {weather.location.latitude.toFixed(2)}</p>
						<p>longitude {weather.location.longitude.toFixed(2)}</p>
					</div>
					<p>accurate to {formatDate(weather.location.localTime)}</p>
				</footer>
			)}
		</article>
	);
}
