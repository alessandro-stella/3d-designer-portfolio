import styles from "../styles/ContactMe.module.css";

export default function DisplayMessage({ success, error }) {
    return (
        <div className={styles.message}>
            {success &&
                "All done! Your contact info has been sent correctly. I will get back to you as soon as possible"}
            {error && error}
        </div>
    );
}
