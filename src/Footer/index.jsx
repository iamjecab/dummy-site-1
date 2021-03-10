import React from "react";
import styled from "styled-components";
import Contact from "../Components/Contact";
import Join from "../Components/Join";

const Wrapper = styled.div`
    padding: 2rem 8rem 8rem 8rem;
    display: flex;
    /* justify-content: space-evenly; */
`;

export default function Footer() {
    return (
        <>
            <Wrapper>
                <Contact></Contact>
                <Join></Join>
            </Wrapper>
        </>
    );
}
