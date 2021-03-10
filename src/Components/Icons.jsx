import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const IconContainer = styled.div`
    svg {
        margin-right: 1.3rem;
        cursor: pointer;
        :hover {
            color: white;
        }
    }
`;

export default function Icons() {
    return (
        <>
            <IconContainer>
                <FaFacebookF size={18}></FaFacebookF>
                <FaTwitter size={18}></FaTwitter>
                <FaYoutube size={18}></FaYoutube>
            </IconContainer>
        </>
    );
}
