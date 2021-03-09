import React from "react";
import styled from "styled-components";
import Heading from "../Components/Heading";
import Links from "../Components/Links";

import { Logo } from "../Components/Logo";

// url="https://source.unsplash.com/501x500"

const Wrapper = styled.div`
    background-image: url("https://source.unsplash.com/1920x1080/?digitalmarketing, seo");
    height: 100vh;
    width: 100vw;
    background-attachment: fixed;
`;

const Header = styled.header`
    align-items: center;
    padding: 4vh 6vh 0 6vh;
    background-color: transparent;
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export default function Hero() {
    return (
        <>
            <Wrapper>
                <Header>
                    <Logo></Logo>
                    <Links></Links>
                </Header>
                <Heading></Heading>
            </Wrapper>
        </>
    );
}
