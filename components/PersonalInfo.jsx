import { useEffect, useRef, useState } from "react";
import { useSiteContext } from "../SiteContext";
import styles from "../styles/PersonalInfo.module.css";
import anime from "animejs";

export default function PersonalInfo() {
    const { scrollY } = useSiteContext();

    const titleRef = useRef(null);
    const infoRef = useRef(null);
    const collabsRef = useRef(null);

    const [titleAnimation, setTitleAnimation] = useState(false);
    const [infoAnimation, setInfoAnimation] = useState(false);
    const [collabsAnimation, setCollabsAnimation] = useState(false);

    useEffect(() => {
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();

            return rect.top <= window.innerHeight - element.offsetHeight / 3;
        }

        if (!titleAnimation && isInViewport(titleRef.current)) {
            setTitleAnimation(true);
        }

        if (!infoAnimation && isInViewport(infoRef.current)) {
            setInfoAnimation(true);
        }

        if (!collabsAnimation && isInViewport(collabsRef.current)) {
            setCollabsAnimation(true);
        }
    }, [scrollY]);

    useEffect(() => {
        if (!titleAnimation) return;

        triggerAnimation("#title");
    }, [titleAnimation]);

    useEffect(() => {
        if (!infoAnimation) return;

        triggerAnimation("#info");
    }, [infoAnimation]);

    useEffect(() => {
        if (!collabsAnimation) return;

        triggerAnimation("#collabs");
    }, [collabsAnimation]);

    function triggerAnimation(elementId) {
        anime({
            targets: elementId,
            easing: "linear",
            translateY: [50, 0],
            opacity: 1,
            duration: 500,
        });
    }

    return (
        <div className={styles.main}>
            <div id="title" ref={titleRef} className={styles.title}>
                Hi, <span>SUP3R</span> is here!
            </div>

            <div className={styles.body}>
                <div id="info" ref={infoRef} className={styles.info}>
                    <div className={styles.sectionTitle}>
                        Some info about me
                    </div>

                    <div className={styles.textSection}>
                        I&apos;m an italian high school student, currently
                        aspiring web developer and 3d modeler
                    </div>

                    <div className={styles.textSection}>
                        Skilled in 3d modeling with Blender, in particular
                        sci-fi, abstract, low-poly models and creation of
                        textures. Experience in exporting models for Roblox
                        Studio
                    </div>

                    <div className={styles.textSection}>
                        Programmer, mainly in Javascript, with experience of
                        working with NodeJS, Express and React
                    </div>
                </div>

                <div id="collabs" ref={collabsRef} className={styles.collabs}>
                    <div className={styles.sectionTitle}>
                        Past collaborations
                    </div>

                    <div className={styles.textSection}>
                        Collaborated with the AMV youtuber{" "}
                        <a
                            href="https://www.youtube.com/channel/UCR5puPTupYaB4m-v-LR7IcA"
                            rel="noreferrer"
                            target="_blank">
                            AshRock
                        </a>
                        , for which I created his channel logo, and helped in
                        the various collaborations he did with other youtubers
                    </div>

                    <div className={styles.textSection}>
                        Modeling of logos and consultation for some models of
                        structures for the Italian community of roblox &quot;
                        <a
                            href="https://www.roblox.com/groups/5303121/Esercito-Italiano#!/about"
                            rel="noreferrer"
                            target="_blank">
                            Esercito Italiano
                        </a>
                        &quot;, one of the largest and most active in Italy
                    </div>
                </div>
            </div>
        </div>
    );
}
