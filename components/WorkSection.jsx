import { useEffect, useRef, useState } from "react";
import { useSiteContext } from "../SiteContext";
import styles from "../styles/Works.module.css";

export default function WorkSection({ index, opacity }) {
    return (
        <div className={styles.section} style={{ opacity }}>
            <h1>{index}</h1>
        </div>
    );
}
