import styled from "styled-components";

export default function Header ({isLight, handleToggleTheme}) {
    return (
        <Wrapper>
            <p>header</p>
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
`;
