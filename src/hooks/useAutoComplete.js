import { useEffect, useRef, useState } from "react";

export default function useAutoComplete(autoComplete, onEnter) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentValue, setCurrentValue] = useState(`${autoComplete[0]?.name}, ${autoComplete[0]?.country}`);
    const listRef = useRef([]);

    const listenToArrowKeys = (e) => {
        if (e.key === "ArrowDown") {
            setCurrentIndex((prevIndex) =>
                Math.min(prevIndex + 1, autoComplete.length - 1)
            );
        } else if (e.key === "ArrowUp") {
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (e.key === "Enter" && currentIndex !== -1) {
            e.preventDefault();
            onEnter(
                `${autoComplete[currentIndex].name}, ${autoComplete[currentIndex].country}`
            );
            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        listRef.current[currentIndex]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
    }, [currentIndex]);

    return { currentIndex, setCurrentIndex, currentValue, setCurrentValue, listenToArrowKeys, listRef };
}
