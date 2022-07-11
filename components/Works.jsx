import { useEffect } from "react";
import styles from "../styles/Works.module.css";
import WorkSection from "./WorkSection";

export default function Works() {
    const sections = [1, 2, 3];

    useEffect(() => {
        console.log("Works loaded!");
    }, []);

    return (
        <>
            {sections.map((singleSection) => (
                <WorkSection key={singleSection} index={singleSection} />
            ))}
        </>
    );
}
