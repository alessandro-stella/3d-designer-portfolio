import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    let timeout;

    useEffect(() => {
        window.onresize = function () {
            clearTimeout(timeout);

            timeout = setTimeout(function () {
                setSize([window.innerWidth, window.innerHeight]);
            }, 100);
        };
    }, []);

    return size;
}
