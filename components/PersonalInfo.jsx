import { useEffect, useState } from "react";
import { useSiteContext } from "../SiteContext";
import styles from "../styles/PersonalInfo.module.css";

export default function PersonalInfo() {
    const scrollY = useSiteContext();
    const [titleOpacity, setTitleOpacity] = useState(0);
    const [section1Opacity, setSection1Opacity] = useState(0);
    const [section2Opacity, setSection2Opacity] = useState(0);

    useEffect(() => {
        const titleValue = scrollY / (window.innerHeight / 1.3);
        const section1Value = titleValue * 0.9;
        const section2Value = titleValue * 0.8;

        setTitleOpacity(titleValue >= 1 ? 1 : titleValue);
        setSection1Opacity(section1Value >= 1 ? 1 : section1Value);
        setSection2Opacity(section2Value >= 1 ? 1 : section2Value);
    }, [scrollY]);

    return (
        <div
            className={styles.main}
            style={{ "--title-opacity": titleOpacity }}>
            <div className={styles.title}>
                Hi, <span>SUP3R</span> is here!
            </div>

            <div className={styles.body}>
                <div
                    className={styles.info}
                    style={{ "--section1-opacity": section1Opacity }}>
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

                <div
                    className={styles.pastCollaborations}
                    style={{ "--section2-opacity": section2Opacity }}>
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
