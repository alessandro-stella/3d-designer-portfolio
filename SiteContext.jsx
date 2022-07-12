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

    return <Context.Provider value={scrollY}>{children}</Context.Provider>;
}

export function useSiteContext() {
    return useContext(Context);
}
