import Head from "next/head";
import styles from "../styles/Home.module.css";

import VideoBackground from "../components/VideoBackground";
import PersonalInfo from "../components/PersonalInfo";
import ImagePreview from "../components/ImagePreview";
import ContactMe from "../components/ContactMe";
import PastWorks from "../components/PastWorks";
import { useSiteContext } from "../SiteContext";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const { setFontSize } = useSiteContext();
    const [gotFontSize, setGotFontSize] = useState(false);
    const mainPageRef = useRef(null);

    useEffect(() => {
        if (gotFontSize) {
            return;
        }

        setGotFontSize(true);

        setFontSize(
            +window
                .getComputedStyle(mainPageRef.current, null)
                .getPropertyValue("font-size")
                .slice(0, -2)
        );
    }, []);

    return (
        <div className={styles.container} ref={mainPageRef}>
            <Head>
                <title>Sup3r_ Portfolio</title>
                <meta
                    name="description"
                    content="A personal portfolio containing some of the past projects created by the 3d designer Sup3r_"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <VideoBackground />

            <div className={styles.mainPage}>
                <PersonalInfo />
                <ImagePreview />
                <PastWorks />
                <ContactMe />
            </div>
        </div>
    );
}
