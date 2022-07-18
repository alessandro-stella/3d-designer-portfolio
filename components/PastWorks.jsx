import { useEffect, useState } from "react";
import styles from "../styles/PastWorks.module.css";

export default function PastWorks() {
    const [imageCollection1, setImageCollection1] = useState([]);
    const [imageCollection2, setImageCollection2] = useState([]);

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

        serverImages = shuffleArray(serverImages);

        const half = Math.ceil(serverImages.length / 2);

        setImageCollection1(serverImages.splice(0, half));
        setImageCollection2(serverImages.splice(-half));
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.title}>Some of my past works</div>

            <div className={styles.imageContainer}>
                <div
                    className={styles.imagesSection1}
                    style={{ "--image-number": imageCollection1.length }}>
                    {imageCollection1.map((image, index) => (
                        <img
                            className={styles.image}
                            key={index}
                            src={image.imageURL}
                            alt={image.imageALT}
                        />
                    ))}
                    {imageCollection1.map((image, index) => (
                        <img
                            className={styles.image}
                            key={index}
                            src={image.imageURL}
                            alt={image.imageALT}
                        />
                    ))}
                </div>

                <div
                    className={styles.imagesSection2}
                    style={{
                        "--image-number": imageCollection2.length,
                    }}>
                    {imageCollection2.map((image, index) => (
                        <img
                            className={styles.image}
                            key={index}
                            src={image.imageURL}
                            alt={image.imageALT}
                        />
                    ))}
                    {imageCollection2.map((image, index) => (
                        <img
                            className={styles.image}
                            key={index}
                            src={image.imageURL}
                            alt={image.imageALT}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
