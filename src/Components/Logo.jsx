import styled from "styled-components";
import React from "react";
import { FaJsSquare } from "react-icons/fa";

const Wrapper = styled.div`
    /* padding: 3vh 0 0 3vh; */
    display: flex;
    align-items: flex-end;
    cursor: pointer;
`;

const TextContainet = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0.5rem;
`;

export const Text = styled.h1`
    font-size: ${(props) => props.fontSize}rem;
    font-weight: ${(props) => props.fontWeight};
`;

export function Logo() {
    return (
        <>
            <Wrapper>
                <FaJsSquare size={50}></FaJsSquare>
                <TextContainet>
                    <Text fontSize={3}>Jecav Yadav</Text>
                    <Text fontSize={1.6}>Digital Media Expert</Text>
                </TextContainet>
            </Wrapper>
        </>
    );
}
