import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isLight, handleToggleTheme }) {
    const location = useLocation();
    return (
        <Wrapper>
            <h1>header</h1>
            <nav>
                <Link to="/">
                    <MenuEl isCurrentPage={location.pathname === "/"}>Home</MenuEl>
                </Link>
                <Link to="/about">
                    <MenuEl isCurrentPage={location.pathname === "/about"}>About</MenuEl>
                </Link>
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
    border-bottom: solid 1px;
    & nav {
        display: flex;
    }
    & a {
        text-decoration: none;
        color: inherit;
    }
    & a:first-child {
        margin-right: 12px;
    }
`;

const MenuEl = styled.div`
padding-bottom: 2px;
border-bottom: solid 2px ${props => (props.isCurrentPage ? "" : "transaprent")};
&:hover {
    border-bottom: solid 2px;
}
`;