import { useEffect, useState } from "react";
import { useSiteContext } from "../SiteContext";
import styles from "../styles/Works.module.css";
import WorkSection from "./WorkSection";

export default function Works() {
    const scrollY = useSiteContext();
    const sections = [0, 1, 2];

    const [section1Opacity, setSection1Opacity] = useState(0);
    const [section2Opacity, setSection2Opacity] = useState(0);
    const [section3Opacity, setSection3Opacity] = useState(0);

    useEffect(() => {
        if (scrollY === "initial") {
            return;
        }

        if (scrollY >= window.innerHeight) {
            checkOpacities(scrollY / innerHeight);
        }
    }, []);

    useEffect(() => {
        if (scrollY === "initial") {
            return;
        }

        if (scrollY >= window.innerHeight) {
            checkOpacities(scrollY / innerHeight);
        }
    }, [scrollY]);

    function checkOpacities(ratio) {
        if (ratio < 2.1) {
            setSection1Opacity((ratio - 1.1).toFixed(3));
            return;
        }

        if (ratio < 3.2) {
            setSection1Opacity((1 - (ratio - 2.2)).toFixed(3));
            setSection2Opacity((ratio - 2.2).toFixed(3));
            return;
        }

        if (ratio < 4.2) {
            setSection2Opacity((1 - (ratio - 3.2)).toFixed(3));
            setSection3Opacity((ratio - 3.2).toFixed(3));
            return;
        }

        setSection3Opacity(1);
    }

    function passOpacity(index) {
        let opacity;

        switch (index) {
            case 0:
                opacity = section1Opacity;
                break;

            case 1:
                opacity = section2Opacity;
                break;

            case 2:
                opacity = section3Opacity;
                break;

            default:
                break;
        }

        return opacity;
    }

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
