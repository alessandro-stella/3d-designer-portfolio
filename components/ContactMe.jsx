import { useEffect, useState } from "react";
import styles from "../styles/ContactMe.module.css";
import DisplayMessage from "./DisplayMessage";
import InputField from "./InputField";

export default function ContactMe() {
    const emptyStringRegex = new RegExp(/^(?!\s*$).+/);

    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mainText, setMainText] = useState("");

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (success) {
            setUsername("");
            setEmail("");
            setMainText("");

            setTimeout(() => {
                setSuccess(false);
            }, 2500);
        }
    }, [success]);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false);
            }, 2500);
        }
    }, [error]);

    function submitForm(e) {
        e.preventDefault();

        if (
            !checkRegex(username, emptyStringRegex) ||
            !checkRegex(mainText, emptyStringRegex) ||
            !checkRegex(email, emailRegex)
        ) {
            setError(
                "It seems like some data is missing or incorrect, please try again"
            );

            return;
        }

        sendEmail("/api/sendEmail", {
            username,
            email,
            message: mainText,
        })
            .then((res) => setSuccess(true))
            .catch((err) =>
                setError(
                    "There's been an error during the email sending process, please try again later"
                )
            );
    }

    async function sendEmail(url = "", data = {}) {
        const response = await fetch(url, {
            method: "post",
            body: JSON.stringify(data),
        });

        return response.json();
    }

    const checkRegex = (text, regex) => regex.test(text);

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
                        className={`${styles.submit} ${
                            success || error ? styles.disabled : ""
                        }`}
                        type="submit"
                        value="SUBMIT"
                    />

                    <>
                        {success || error ? (
                            <DisplayMessage success={success} error={error} />
                        ) : null}
                    </>
                </form>

                <div className={styles.discord}>
                    You can also message me on{" "}
                    <a onClick={copyDiscordUsername}>Discord</a> if you prefer a
                    more informal way of communication
                </div>
            </div>
        </div>
    );
}
