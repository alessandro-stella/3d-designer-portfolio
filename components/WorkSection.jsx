import styles from "../styles/Works.module.css";

const allSectionsData = [
    { title: "Sci-Fi", image: "/SciFiImage.png" },
    { title: "Interactive", image: "/SoundVisualizer.png" },
    { title: "Abstract", image: "/AbstractImage.png" },
];

export default function WorkSection({ index, opacity }) {
    const sectionData = allSectionsData[index];

    return (
        <div className={styles.section} style={{ opacity }}>
            <div className={styles.head}>{sectionData.title}</div>

            <div className={styles.body}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url("${sectionData.image}")` }}
                />
            </div>
        </div>
    );
}
