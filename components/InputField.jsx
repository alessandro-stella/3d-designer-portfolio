import styles from "../styles/ContactMe.module.css";

export default function InputField({
    value,
    setValue,
    type,
    label,
    isMultiline,
}) {
    return (
        <>
            {isMultiline ? (
                <textarea
                    className={styles.inputField}
                    cols="30"
                    rows="20"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={label}
                    style={{ resize: "none", borderRadius: "1em" }}
                    required></textarea>
            ) : (
                <input
                    className={styles.inputField}
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={label}
                    required
                />
            )}
        </>
    );
}
