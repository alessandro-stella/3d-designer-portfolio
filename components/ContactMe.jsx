import { useEffect, useState } from "react";
import styles from "../styles/ContactMe.module.css";
import InputField from "./InputField";

export default function ContactMe() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mainText, setMainText] = useState("");

    function submitForm(e) {
        e.preventDefault();

        alert("SUBMITTING");
    }

    const copyDiscordUsername = () => {
        navigator.clipboard.writeText("Sup3r_#8285");
        alert('Copied user tag: "Sup3r_#8285"');
    };

    return (
        <div className={styles.main}>
            <div className={styles.inner}>
                <div className={styles.title}>Contact me</div>
                <form className={styles.form} onSubmit={(e) => submitForm(e)}>
                    <InputField
                        value={username}
                        setValue={setUsername}
                        type="text"
                        label="Name or username"
                    />

                    <InputField
                        value={email}
                        setValue={setEmail}
                        type="email"
                        label="Email"
                    />

                    <InputField
                        value={mainText}
                        setValue={setMainText}
                        label="Message"
                        isMultiline
                    />

                    <input
                        className={styles.submit}
                        type="submit"
                        value="SUBMIT"
                    />
                </form>

                <div className={styles.discord}>
                    You can also message me on{" "}
                    <a onClick={copyDiscordUsername}>Discord</a> if you prefer a
                    more direct way of communication
                </div>
            </div>
        </div>
    );
}
