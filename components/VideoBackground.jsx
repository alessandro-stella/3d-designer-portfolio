import { useEffect, useState } from "react";
import styles from "../styles/VideoBackground.module.css";

export default function VideoBackground() {
    const [bottom, setBottom] = useState(0);

    useEffect(() => {
        const parallaxEffect = () => {
            setBottom(Math.floor(window.scrollY / 20));
        };

        window.addEventListener("scroll", parallaxEffect);

        return () => {
            window.removeEventListener("scroll", parallaxEffect);
        };
    }, []);

    return (
        <div
            className={styles.background}
            style={{ transform: `translateY(-${bottom}vh)` }}>
            <video src="/videoBg.mp4" autoPlay muted></video>

            <div className={styles.arrowDown}></div>
        </div>
    );
}
