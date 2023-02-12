import styled from "styled-components";

export default function Footer() {
    return (
        <Wrapper>
            <p>A écouter sans moderation !</p>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;