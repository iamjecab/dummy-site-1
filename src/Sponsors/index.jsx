import React from "react";
import { FaAmazon, FaApple, FaGoogle, FaMicrosoft } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 8rem 5rem;
    display: flex;
    justify-content: space-evenly;
`;

const Text = styled.h1`
    font-size: 3.2rem;
    text-align: center;
    margin-top: 9rem;
`;

export default function Sponsors() {
    return (
        <>
            <Text>Featured on</Text>
            <Wrapper>
                <FaAmazon size={110}></FaAmazon>
                <FaApple size={110}></FaApple>
                <FaGoogle size={110}></FaGoogle>
                <FaMicrosoft size={110}></FaMicrosoft>
            </Wrapper>
        </>
    );
}
