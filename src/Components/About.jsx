import React from "react";
import styled from "styled-components";

import { Text } from "./Logo";

const Wrapper = styled.section`
    padding: 12rem 20%;
    display: flex;
`;
const Img = styled.div``;

const TextWrapper = styled.div`
    width: 55rem;
    height: 47rem;

    padding: 7rem 0 0 3rem;
    h1:nth-child(3),
    h1:nth-child(5) {
        padding-top: 2rem;
    }
    h1:nth-child(1),
    h1:nth-child(2) {
        margin-left: -8rem;
    }
`;

export default function About() {
    return (
        <>
            <Wrapper>
                <Img>
                    <img
                        src="https://source.unsplash.com/550x470/?person"
                        alt="a"
                    />
                </Img>
                <TextWrapper>
                    <Text fontSize={5}>Hi,</Text>
                    <Text fontSize={5}>I'm Jecab</Text>
                    <Text fontSize={2}>Digital Media Expert with</Text>
                    <Text fontSize={2}>
                        12+ Years of Professional Experience.
                    </Text>
                    <Text fontSize={1.6} fontWeight={500}>
                        This is a great space to write a long text about your
                        company and your services. You can use this space to go
                        into a little more detail about your company. Talk about
                        your team and what services you provide. Tell your
                        visitors the story of how you came up with the idea for
                        your business and what makes you different from your
                        competitors. Make your company stand out and show your
                        visitors who you are.
                    </Text>
                </TextWrapper>
            </Wrapper>
        </>
    );
}
