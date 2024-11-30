import React from "react";
import styles from "./SearchAutoComplete.module.css";

export default function SearchAutoComplete({ autoComplete, setCity, error }) {
	if (autoComplete.length === 0 || error) return <></>;
	return (
		<div className={styles.SearchAutoComplete}>
			<ul className={styles.SearchAutoComplete__suggestions}>
				{autoComplete.map((city) => (
					<li
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
