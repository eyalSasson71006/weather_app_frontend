import React from "react";
import styles from "./SearchAutoComplete.module.css";

export default function SearchAutoComplete({ autoComplete, setCity, city, error }) {
	if (autoComplete.length === 0 || error || !city) return <></>;
	return (
		<div className={styles.SearchAutoComplete}>
			<ul
				className={styles.SearchAutoComplete__suggestions}
				role="listbox"
			>
				{autoComplete.map((city) => (
					<li
						role="option"
						key={city.id}
						onClick={() => setCity(`${city.name}, ${city.country}`)}
					>
						{city.name}, {city.country}
					</li>
				))}
			</ul>
		</div>
	);
}
