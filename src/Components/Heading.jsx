import React from "react";
import styled from "styled-components";
import { Text } from "./Logo";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 40rem 0 0 25rem;
    /* &::last-child {
        padding-top: 8rem;
    } */
    h1:nth-child(3) {
        padding: 2rem 0 6rem 0;
    }
`;

export const Button = styled.button`
    border: 0.2rem solid black;
    padding: 1.4rem 2.9rem;
    font-size: 1.6rem;
    border-radius: 2.5rem;
    font-weight: 600;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    :hover {
        color: white;
        background-color: black;
    }
`;

export default function Heading() {
    return (
        <>
            <Wrapper>
                <Text fontSize={5.1}>Free Digital Marketing</Text>
                <Text fontSize={5.1}>Webinar.</Text>
                <Text fontSize={2.4} fontWeight={500}>
                    Unlock Marketing Secrets That Work
                </Text>
                <Button>Reserve My Spot</Button>
            </Wrapper>
        </>
    );
}
