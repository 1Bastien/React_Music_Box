import styled from "styled-components";

export default function GridButton({ isPlayed = false, soundPlay, id, handleSampleChange }) {
    return (
        <Wrapper isPlayed={isPlayed} onClick={soundPlay}>
            <label onClick={(e) => e.stopPropagation()} htmlFor={id}>🎵</label>
            <input
                onClick={(e) => e.stopPropagation()}
                id={id}
                type="file"
                onChange={handleSampleChange}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border-radius: 20px;
    background: #E3E3E3;
    position: relative;
    overflow: hidden;
    &::before {
        border-radius: 20px;
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        background: ${(props) => (props.isPlayed ? "#000000" : "#EEEEEE")};
        opacity: ${props => props.isPlayed ? "1" : "0"};
        transition: 0.1s;
    }
    &:hover::before {
        opacity: 1;
    }
    &:active::before {
        opacity: 1;
        background: #0A0A0A;
    }
    & input {
        display: none;
    }
    & label {
        position: absolute;
        right: 12px;
        top: 12px;
        font-size: 24px;
    }
`;