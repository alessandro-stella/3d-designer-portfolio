import { useEffect, useState } from "react";
import styles from "../styles/ImagePreview.module.css";

export default function ImagePreview() {
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
            {images.map((image, index) => (
                <img key={index} src={image.imageURL} alt={image.imageALT} />
            ))}
        </div>
    );
}
