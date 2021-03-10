import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Icons from "./Icons";

const Wrapper = styled.div`
    display: flex;
`;

const Home = styled.h1`
    font-size: 1.7rem;
    font-weight: 300;
    padding: 0 3.5rem;
    :hover {
        cursor: pointer;
        color: white;
    }
`;

// const IconContainer = styled.div`
//     svg {
//         margin-right: 1.3rem;
//         cursor: pointer;
//         :hover {
//             color: white;
//         }
//     }
// `;

export default function Links() {
    return (
        <>
            <Wrapper>
                <Home>HOME</Home>
                {/* <IconContainer>
                    <FaFacebookF size={18}></FaFacebookF>
                    <FaTwitter size={18}></FaTwitter>
                    <FaYoutube size={18}></FaYoutube>
                </IconContainer> */}
                <Icons></Icons>
            </Wrapper>
        </>
    );
}
