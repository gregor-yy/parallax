import { useEffect } from "react";

import Article from "./components/Article/Article";
import Header from "./components/UI/Header/Header";

import ScrollContainer from "./components/UI/ScrollContainer/ScrollContainer";

function App() {
    useEffect(() => {
        const handleScroll = (e) => {
            document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <ScrollContainer>
            <Header />
            <Article />
        </ScrollContainer>
    );
}

export default App;
