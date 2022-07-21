import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

const Context = createContext({ scrollY: "initial" });

export function SiteContext({ children }) {
    const [scrollY, setScrollY] = useState("initial");
    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
        if (scrollY === "initial") {
            setScrollY(window.scrollY);
        }
    }, [scrollY]);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    });

    useEffect(() => {
        document.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <Context.Provider value={{ scrollY, fontSize, setFontSize }}>
            {children}
        </Context.Provider>
    );
}

export function useSiteContext() {
    return useContext(Context);
}
