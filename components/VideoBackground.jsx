import { useEffect, useRef, useState } from "react";
import styles from "../styles/VideoBackground.module.css";

export default function VideoBackground() {
    const [bottom, setBottom] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            videoRef.current.play();
        }, 500);

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
            <video ref={videoRef} muted playsInline disableRemotePlayback>
                <source src="/videoBg.mp4" type="video/mp4" />
                <source src="/videoBg.webm" type="video/webm" />
                <source src="/videoBg.m4v" type="video/mp4" />
            </video>

            <div className={styles.arrowDown}></div>
        </div>
    );
}
