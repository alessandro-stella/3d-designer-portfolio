import { useEffect, useRef, useState } from "react";
import styles from "../styles/PastWorks.module.css";
import useWindowSize from "../useWindowSize";
import anime from "animejs";
import { useSiteContext } from "../SiteContext";

export default function PastWorks() {
    const { fontSize } = useSiteContext();

    const imageContainer1Ref = useRef(null);
    const imageContainer2Ref = useRef(null);

    const [imageCollection1, setImageCollection1] = useState([]);
    const [imageCollection2, setImageCollection2] = useState([]);

    const [width, height] = useWindowSize();

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageWidth, setImageWidth] = useState(0);

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

    useEffect(() => {
        updateImageContainerWidth();
    }, [width, height]);

    useEffect(() => {
        if (imageLoaded === false) return;

        updateImageContainerWidth();
    }, [imageLoaded]);

    useEffect(() => {
        if (imageWidth === 0) return;

        let translateX = (imageWidth + fontSize) * imageCollection1.length;

        anime.remove("#imageContainer1");

        anime({
            autoplay: true,
            targets: "#imageContainer1",
            translateX: [0, -translateX],
            loop: true,
            duration: 120000,
            easing: "linear",
        });

        anime.remove("#imageContainer2");

        anime({
            autoplay: true,
            targets: "#imageContainer2",
            translateX: [0, translateX],
            loop: true,
            duration: 120000,
            easing: "linear",
        });
    }, [imageWidth]);

    function handleImageLoading(imageIndex) {
        if (!imageLoaded) {
            setImageLoaded(imageIndex);
        }
    }

    function updateImageContainerWidth() {
        if (imageLoaded === false) return;

        let collection = +imageLoaded[0];
        let image = +imageLoaded[2];

        let collections = [
            imageContainer1Ref.current,
            imageContainer2Ref.current,
        ];

        let newImageWidth =
            collections[collection].childNodes[image].offsetWidth;

        if (newImageWidth != imageWidth) {
            setImageWidth(newImageWidth);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.title}>Some of my past works</div>

            <div className={styles.imageContainer}>
                <div
                    id="imageContainer1"
                    ref={imageContainer1Ref}
                    className={styles.imagesSection1}>
                    {imageCollection1.map((image, index) => (
                        <img
                            onLoad={() => handleImageLoading(0 + "-" + index)}
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
                    id="imageContainer2"
                    ref={imageContainer2Ref}
                    className={styles.imagesSection2}>
                    {imageCollection2.map((image, index) => (
                        <img
                            onLoad={() => handleImageLoading(1 + "-" + index)}
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

                <div id="logo">test</div>
            </div>
        </div>
    );
}
