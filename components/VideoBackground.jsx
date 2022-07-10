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
            <video autoPlay muted>
                <source src="/videoBgCompressed2.mp4" type="video/mp4" />
                {/* <source src="/videoBg.webm" type="video/webm; codecs=vp9" /> */}
            </video>

            <div className={styles.arrowDown}></div>
        </div>
    );
}
