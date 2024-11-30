import React from "react";
import styles from "./SearchAutoComplete.module.css";

export default function SearchAutoComplete({
	autoComplete,
	setCity,
	city,
	error,
	getWeather,
	currentIndex,
	listRef,
}) {
	if (autoComplete.length === 0 || error || !city) return <></>;
	return (
		<div className={styles.SearchAutoComplete}>
			<ul
				className={styles.SearchAutoComplete__suggestions}
				role="listbox"
			>
				{autoComplete.map((city, index) => (
					<li
						role="option"
						key={city.id}
						onClick={() => {
							getWeather(`${city.name}, ${city.country}`);
							setCity("");
						}}
						className={
							index === currentIndex
								? styles.SearchAutoComplete__suggestions_selected
								: ""
						}
						ref={(el) => (listRef.current[index] = el)}
					>
						{city.name}, {city.country}
					</li>
				))}
			</ul>
		</div>
	);
}
