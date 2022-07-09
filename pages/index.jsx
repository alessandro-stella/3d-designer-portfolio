import Head from "next/head";
import styles from "../styles/Home.module.css";

import VideoBackground from "../components/VideoBackground";
import Loader from "../components/Loader";

export default function Home() {
    return (
        <div className={styles.container}>
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
                <Loader />

                <h1>CIAOOO</h1>
            </div>
        </div>
    );
}
