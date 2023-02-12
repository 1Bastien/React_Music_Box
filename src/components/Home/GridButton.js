import styled from "styled-components";

export default function GridButton ({isPlayed = false}) {
    return (
        <Wrapper isPlayed={isPlayed}>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    border-radius: 20px;
    background: #985717;
    position: relative;
    &::before {
        border-radius: 20px;
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        background: ${(props)=>(props.isPlayed ? "#985717" : "#bf8013")};
        opacity: ${props => props.isPlayed? "1" : "0"};
        transition: 0.1s;
    }
    &:hover::before {
        opacity: 1;
    }
    &:active::before {
        opacity: 1;
        background: #985717;
    }
`;