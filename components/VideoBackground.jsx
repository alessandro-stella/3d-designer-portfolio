import { useEffect, useRef, useState } from "react";
import { useSiteContext } from "../SiteContext";
import styles from "../styles/VideoBackground.module.css";

export default function VideoBackground() {
    const [bottom, setBottom] = useState(0);
    const videoRef = useRef(null);
    const scrollY = useSiteContext();

    useEffect(() => {
        setTimeout(() => {
            videoRef.current.play();
        }, 500);
    }, []);

    useEffect(() => {
        if (scrollY / 20 < 50) {
            setBottom(Math.floor(scrollY / 20));
        }
    }, [scrollY]);

    return (
        <div
            className={styles.background}
            style={{ transform: `translateY(-${bottom}vh)` }}>
            <video ref={videoRef} muted playsInline disableRemotePlayback>
                <source src="/homepage/videoBg.mp4" type="video/mp4" />
                <source src="/homepage/videoBg.webm" type="video/webm" />
                <source src="/homepage/videoBg.m4v" type="video/mp4" />
            </video>

            <div className={styles.arrowDown}></div>
        </div>
    );
}
