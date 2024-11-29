import React from "react";
import styles from "./WeatherCard.module.css";
import formatDate from "../../utils/dateFormat";

export default function WeatherCard({ weather }) {
	if (!weather) return <></>;
	return (
		<article className={styles.weatherCard}>
			<header className={styles.weatherCard__header}>
				<p className={styles.weatherCard__city}>
					{weather.location.city}
				</p>
				<p className={styles.weatherCard__country}>
					{weather.location.country}
				</p>
				<p className={styles.weatherCard__date}>
					{formatDate(weather.location.localTime)}
				</p>
			</header>
			<section className={styles.weatherCard__temperature}>
				<p className={styles.weatherCard__tempValue}>
					{Math.round(weather.current.temperature)}°
				</p>
				<p className={styles.weatherCard__tempCondition}>
					{weather.current.condition}
				</p>
			</section>
			<section className={styles.weatherCard__climate}>
				<div className={styles.weatherCard__climateItem}>
					<p>precipitation</p>
					<p>{Math.round(weather.current.precipitation)} mm</p>
				</div>
				<div className={styles.weatherCard__climateItem}>
					<p>humidity</p>
					<p>{weather.current.humidity}%</p>
				</div>
				<div className={styles.weatherCard__climateItem}>
					<p>wind</p>
					<p>{Math.round(weather.current.wind)} km/h</p>
				</div>
			</section>
			<section className={styles.weatherCard__forecast}>
				{weather.forecast.map((item, index) => (
					<div
						key={item.time + index}
						className={styles.weatherCard__ForecastItem}
					>
						<p>{item.time.split(" ")[1]}</p>
						<p>{Math.round(item.temp)}°</p>
					</div>
				))}
			</section>
		</article>
	);
}
