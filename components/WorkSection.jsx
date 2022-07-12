import { useState } from "react";
import styles from "../styles/Works.module.css";

const allSectionsData = [
    { title: "Sci-Fi", subtitle: "Fico lo sci-fi" },
    { title: "Abstract", subtitle: "Fica la roba astratta" },
    { title: "Neon", subtitle: "Fica la roba neon" },
];

export default function WorkSection({ index, opacity }) {
    const [sectionData, setSectionData] = useState(allSectionsData[index]);

    return (
        <div className={styles.section} style={{ opacity }}>
            <div className={styles.head}>
                <h1>{sectionData.title}</h1>
            </div>

            <div className={styles.body}>{sectionData.subtitle}</div>
        </div>
    );
}
