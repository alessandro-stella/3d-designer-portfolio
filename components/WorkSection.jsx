import { useEffect, useRef, useState } from "react";
import { useSiteContext } from "../SiteContext";
import styles from "../styles/Works.module.css";

export default function WorkSection({ index }) {
    const sectionRef = useRef(null);
    const scrollY = useSiteContext();
    const [yCoord, setYCoord] = useState(0);
    const [isOnScreen, setIsOnScreen] = useState(false);

    useEffect(() => {
        setYCoord(sectionRef.current.getBoundingClientRect().y);
    }, []);

    useEffect(() => {
        if (scrollY + 100 >= yCoord) {
            if (yCoord + window.innerHeight / 2 >= scrollY) {
                setIsOnScreen(true);
            } else {
                setIsOnScreen(false);
            }
        } else {
            setIsOnScreen(true);
        }
    }, [scrollY]);

    useEffect(() => {
        if (isOnScreen) {
            console.log("Adding isOnScreen to section ", index);
        } else {
            console.log("Removing isOnScreen to section ", index);
        }
    }, [isOnScreen]);

    return (
        <div
            className={`${styles.section} ${
                isOnScreen ? styles.isOnScreen : styles.isNotOnScreen
            }`}
            ref={sectionRef}>
            <h1>{index}</h1>
        </div>
    );
}
