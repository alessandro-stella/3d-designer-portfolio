import { createRef, isValidElement, useEffect, useRef, useState } from "react";
import { useSiteContext } from "../SiteContext";
import styles from "../styles/ImagePreview.module.css";
import WorkSection from "./WorkSection";
import anime from "animejs";

export default function ImagePreview() {
    const { scrollY } = useSiteContext();
    const sections = [0, 1, 2];

    const mainRef = useRef(null);
    const sectionsRef = useRef(sections.map(() => createRef()));

    const [triggerAnimation1, setTriggerAnimation1] = useState("initial");
    const [triggerAnimation2, setTriggerAnimation2] = useState("initial");
    const [triggerAnimation3, setTriggerAnimation3] = useState("initial");

    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        let windowHeight = window.innerHeight;

        if (scrollY === "initial") {
            return;
        }

        let top = mainRef.current.getBoundingClientRect().top;

        if (top <= windowHeight / 1.5) {
            setTriggerAnimation1(false);
            setTriggerAnimation2(false);
            setTriggerAnimation3(false);

            if (top < 0) {
                if (top <= -windowHeight * 1.5) {
                    if (isFilled) {
                        return;
                    }

                    setIsFilled(true);
                    enterAnimation("#section2");

                    return;
                }

                if (!isFilled) {
                    setIsFilled(true);
                }

                if (top <= -windowHeight) {
                    setTriggerAnimation3(true);

                    return;
                }

                setTriggerAnimation2(true);
                return;
            }

            setTriggerAnimation1(true);
        }
    }, [scrollY]);

    useEffect(() => {
        if (triggerAnimation1 === "initial" || !triggerAnimation1) return;

        enterAnimation("#section0");

        anime.remove("#section1");
        anime.remove("#section2");

        exitAnimation("#section1");
        exitAnimation("#section2");
    }, [triggerAnimation1]);

    useEffect(() => {
        if (triggerAnimation2 === "initial" || !triggerAnimation2) return;

        enterAnimation("#section1");

        anime.remove("#section0");
        anime.remove("#section2");

        exitAnimation("#section0");
        exitAnimation("#section2");
    }, [triggerAnimation2]);

    useEffect(() => {
        if (triggerAnimation3 === "initial" || !triggerAnimation3) return;

        enterAnimation("#section2");

        anime.remove("#section0");
        anime.remove("#section1");

        exitAnimation("#section0");
        exitAnimation("#section1");
    }, [triggerAnimation3]);

    function enterAnimation(targets) {
        anime({
            targets,
            opacity: 1,
            translateY: [30, 0],
            easing: "linear",
            duration: 500,
            delay: 300,
        });
    }

    function exitAnimation(targets) {
        anime({
            targets,
            opacity: 0,
            translateY: [0, 30],
            easing: "linear",
            duration: 500,
        });
    }

    return (
        <div ref={mainRef} className={styles.main}>
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
                        refProp={sectionsRef.current[singleSection]}
                    />
                ))}
            </div>
        </div>
    );
}
