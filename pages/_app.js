import "../styles/globals.css";
import { SiteContext } from "../SiteContext";

function MyApp({ Component, pageProps }) {
    return (
        <SiteContext>
            <Component {...pageProps} />
        </SiteContext>
    );
}

export default MyApp;
