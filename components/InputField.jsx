import styles from "../styles/ContactMe.module.css";

export default function InputField({ value, setValue, label, isMultiline }) {
    return (
        <>
            {isMultiline ? (
                <textarea
                    className={styles.inputField}
                    cols="30"
                    rows="10"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={label}></textarea>
            ) : (
                <input
                    className={styles.inputField}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={label}
                />
            )}
        </>
    );
}
