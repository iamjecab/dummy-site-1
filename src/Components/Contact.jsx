import React from "react";
import styled from "styled-components";
import { Button } from "./Heading";
import { Text } from "./Logo";
import Icons from "./Icons";

const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1:nth-child(2),
    button:nth-child(4) {
        margin-bottom: 6rem;
    }
    h1:nth-child(1) {
        margin-top: 8rem;
    }

    h1:nth-child(6) {
        margin-bottom: 3rem;
    }
    background-color: black;
    color: white;
    div:nth-child(8) {
        margin: 2rem 0 7rem 0;
    }
`;

const Input = styled.input`
    width: 35rem;
    height: 3.8rem;
    background-color: black;
    border: 0.3rem solid red;
    color: white;
    font-size: 1.6rem;

    outline: none;
    ::placeholder {
        text-align: center;
        font-size: 1.6rem;
        color: white;
        font-weight: 400;
    }
`;

const ContactButton = styled(Button)`
    background-color: #ef9c83;
    margin-top: 1rem;
    padding-left: 9rem;
    padding-right: 9rem;
    :hover {
        background-color: #212529;
    }
`;

// const Icons = styled(IconContainer)`
//     svg {
//         color: white;
//     }
// `;

export default function Contact() {
    return (
        <>
            <Wrapper>
                <Text fontSize={2.1}>Sign up for all the latest tips,</Text>
                <Text fontSize={2.1}>tricks, and trends</Text>
                <Input placeholder="Enter Your Email Here" type="email"></Input>
                <ContactButton>Send</ContactButton>
                <Text fontSize={1.3}>500 Terry A Francois Blvd.</Text>
                <Text fontSize={1.3}>San Francisco, CA 94158, USA</Text>
                <Text fontSize={1.3}>Tel: 123 4567890 | info@mysite.com</Text>
                <Icons></Icons>
            </Wrapper>
        </>
    );
}
