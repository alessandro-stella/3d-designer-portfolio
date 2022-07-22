import { useEffect, useState } from "react";
import styles from "../styles/ContactMe.module.css";
import InputField from "./InputField";

export default function ContactMe() {
    const [username, setUsername] = useState("");
    const [mainText, setMainText] = useState("");

    function submitForm(e) {
        e.preventDefault();

        alert("SUBMITTING");
    }

    return (
        <div className={styles.main}>
            <div className={styles.inner}>
                <div className={styles.title}>Contact me</div>

                <form className={styles.form} onSubmit={(e) => submitForm(e)}>
                    <InputField
                        value={username}
                        setValue={setUsername}
                        label="Who are you?"
                    />

                    <InputField
                        value={mainText}
                        setValue={setMainText}
                        label="Message"
                        isMultiline
                    />
                </form>
            </div>
        </div>
    );
}
