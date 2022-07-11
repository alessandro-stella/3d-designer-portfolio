import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

const Context = createContext({ scrollY: 0 });

export function SiteContext({ children }) {
    const [scrollY, setScrollY] = useState(0);

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
