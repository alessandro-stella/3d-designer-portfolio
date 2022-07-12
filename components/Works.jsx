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
        if (ratio < 2) {
            setSection1Opacity(ratio - 1);

            return;
        }

        if (ratio < 3) {
            console.log("Out first and in second");
            return;
        }

        if (ratio < 4) {
            console.log("Out second and in third");
            return;
        }

        console.log("Only third");
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
            {sections.map((singleSection) => (
                <WorkSection
                    key={singleSection}
                    index={singleSection}
                    opacity={passOpacity(singleSection)}
                />
            ))}
        </div>
    );
}
