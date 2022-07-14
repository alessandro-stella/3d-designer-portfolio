import styles from "../styles/Works.module.css";

const allSectionsData = [
    { title: "Sci-Fi", text: "/SciFiText.svg", image: "/SciFiImage.png" },
    {
        title: "Dynamic",
        text: "/DynamicText.svg",
        image: "/SoundVisualizer.png",
    },
    {
        title: "Abstract",
        text: "/AbstractText.svg",
        image: "/AbstractImage.png",
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
