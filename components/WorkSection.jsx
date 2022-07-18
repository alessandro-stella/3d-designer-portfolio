import styles from "../styles/Works.module.css";

const allSectionsData = [
    {
        title: "Sci-Fi",
        text: "/homepage/SciFiText.svg",
        image: "/homepage/SciFiImage.png",
    },
    {
        title: "Dynamic",
        text: "/homepage/DynamicText.svg",
        image: "/homepage/SoundVisualizer.png",
    },
    {
        title: "Abstract",
        text: "/homepage/AbstractText.svg",
        image: "/homepage/AbstractImage.png",
    },
];

export default function WorkSection({ index, opacity }) {
    const sectionData = allSectionsData[index];

    return (
        <div className={styles.section} style={{ opacity }}>
            <div className={styles.head}>
                <div className={styles.headUp}>Skilled in</div>
                <img
                    className={styles.headText}
                    src={sectionData.text}
                    alt={sectionData.title}
                />
                <div className={styles.headDown}>models</div>
            </div>

            <div className={styles.body}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url("${sectionData.image}")` }}
                />
            </div>
        </div>
    );
}
