import { useEffect, useState } from "react";
import styles from "../styles/PastWorks.module.css";

export default function PastWorks() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        function importAll(r) {
            let images = [];

            r.keys().map((item, index) => {
                let imageURL = r(item).default.src;

                images[index] = {
                    imageURL,
                    imageALT: imageURL.substr(20).split(".")[0],
                };
            });

            return images;
        }

        function shuffleArray(a) {
            for (var j, i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }

            return a;
        }

        let serverImages = importAll(
            require.context(
                "../public/pastProjects/",
                false,
                /\.(png|jpe?g|svg)$/
            )
        );

        setImages(shuffleArray(serverImages));
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.title}>Some of my past works</div>

            <div className={styles.imagesContainer}>
                <div className={styles.imagesSection1}>
                    {images.map(
                        (image, index) =>
                            index < images.length / 2 && (
                                <img
                                    className={styles.image}
                                    key={index}
                                    src={image.imageURL}
                                    alt={image.imageALT}
                                />
                            )
                    )}
                </div>

                <div className={styles.imagesSection2}>
                    {images.map(
                        (image, index) =>
                            index >= images.length / 2 && (
                                <img
                                    className={styles.image}
                                    key={index}
                                    src={image.imageURL}
                                    alt={image.imageALT}
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    );
}
