import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isLight, handleToggleTheme }) {
    const location = useLocation();
    return (
        <Wrapper>
            <div>
                <h1>La Boite à Musique</h1>
            </div>
            <nav>
                <Link to="/">
                    <MenuEl isCurrentPage={location.pathname === "/"}>Musique</MenuEl>
                </Link>
                <Link to="/about">
                    <MenuEl isCurrentPage={location.pathname === "/about"}>A propos</MenuEl>
                </Link>
            </nav>
            <button onClick={handleToggleTheme}>Style {isLight ? "sombre" : "claire"}</button>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    & nav {
        display: flex;
    }
    & a {
        text-decoration: none;
        color: inherit;
    }
    & a:first-child {
        margin-right: 16px;
    }
`;

const MenuEl = styled.div`
font-size: 18px;
padding-bottom: 2px;
border-bottom: solid 2px ${props => (props.isCurrentPage ? "" : "transaprent")};
&:hover {
    border-bottom: solid 2px;
}
`;