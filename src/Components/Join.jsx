import React from "react";
import styled from "styled-components";
import { Text } from "./Logo";
import { Button } from "./Heading";

const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 25rem;
    background-color: #ef9c83;
    * {
        margin-bottom: 1.5rem;
    }
`;

export default function Join() {
    return (
        <>
            <Wrapper>
                <Text fontSize={1.9}>Yes, I want to join the webinar,</Text>
                <Text fontSize={1.9}>Sign me up!</Text>
                <Button>Reserve My Spot</Button>
            </Wrapper>
        </>
    );
}
