import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header ({isLight, handleToggleTheme}) {
    return (
        <Wrapper>
            <p>header</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <button onClick={handleToggleTheme}>{isLight ? "dark" : "light"} theme</button>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    border-bottom: 1px solid;
    & a {
        text-decoration: none;
        color: inherit;
    }
    & a:first-child {
        margin-right: 12px;
    }
`;
