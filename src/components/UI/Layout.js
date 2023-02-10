import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";
import { useState } from "react";

export default function Layout({ children }) {
    const [isLight, setIsLight] = useState(true);

    function handleToggleTheme() {
        setIsLight(!isLight);
    }

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Wrapper>
                <GlobalStyle />
                {children}
                <button onClick={handleToggleTheme}>{isLight ? "dark" : "light"} theme</button>
            </Wrapper>
        </ThemeProvider>
    );
}

const Wrapper = styled.div``;
