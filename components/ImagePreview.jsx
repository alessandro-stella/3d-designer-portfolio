import { useEffect, useState } from "react";
import { useSiteContext } from "../SiteContext";
import styles from "../styles/ImagePreview.module.css";
import WorkSection from "./WorkSection";

export default function ImagePreview() {
    const scrollY = useSiteContext();
    const sections = [0, 1, 2];

    const [section1Opacity, setSection1Opacity] = useState(0);
    const [section2Opacity, setSection2Opacity] = useState(0);
    const [section3Opacity, setSection3Opacity] = useState(0);

    useEffect(() => {
        if (scrollY === "initial") {
            return;
        }

        if (scrollY >= window.innerHeight * 1.2) {
            checkOpacities(scrollY / innerHeight);
        }
    }, [scrollY]);

    function checkOpacities(ratio) {
        let opacity = 1;

        if (ratio < 2.2) {
            opacity = ratio - 1.2;

            if (opacity < 0.1) {
                opacity = 0;
            }

            if (opacity > 0.9) {
                opacity = 1;
            }

            setSection1Opacity(opacity.toFixed(3));
            return;
        }

        if (ratio < 3.3) {
            opacity = ratio - 2.3;

            if (opacity < 0.1) {
                opacity = 0;
            }

            if (opacity > 0.9) {
                opacity = 1;
            }

            setSection1Opacity((1 - opacity).toFixed(3));
            setSection2Opacity(opacity.toFixed(3));
            return;
        }

        if (ratio < 4.4) {
            opacity = ratio - 3.4;

            if (opacity < 0.1) {
                opacity = 0;
            }

            if (opacity > 0.9) {
                opacity = 1;
            }

            setSection2Opacity((1 - opacity).toFixed(3));
            setSection3Opacity(opacity.toFixed(3));
            return;
        }

        setSection1Opacity(0);
        setSection2Opacity(0);
        setSection3Opacity(opacity);
    }

    const passOpacity = (index) =>
        [section1Opacity, section2Opacity, section3Opacity][index];

    return (
        <div className={styles.main}>
            <div className={styles.backgroundContainer}>
                <div className={styles.background}>
                    <div className={styles.backgroundHead}></div>
                    <div className={styles.backgroundBody}></div>
                </div>
            </div>

            <div className={styles.sectionContainer}>
                {sections.map((singleSection) => (
                    <WorkSection
                        key={singleSection}
                        index={singleSection}
                        opacity={passOpacity(singleSection)}
                    />
                ))}
            </div>
        </div>
    );
}
