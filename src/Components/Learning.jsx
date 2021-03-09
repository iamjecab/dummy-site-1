import React from "react";
import styled from "styled-components";
import { Text } from "./Logo";

const Wrapper = styled.div`
    padding: 0 17%;
    h1:first-child {
        text-align: center;
        padding-bottom: 8rem;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const LargeText = styled.h1`
    font-size: 17.5rem;
    /* padding: 0 19rem; */
    color: rgba(
        ${(props) => props.red},
        ${(props) => props.green},
        ${(props) => props.blue},
        0.3
    );
    /* overflow: hidden; */
`;
const SmallText = styled.h1`
    /* margin: 0 30rem -8rem 0; */
    position: absolute;
    top: 7.5rem;
    /* overflow: hidden; */
    font-size: 1.9rem;
    color: black;
`;

export default function Learning() {
    return (
        <>
            <Wrapper>
                <Text fontSize={3.2}>You Will Learn How To</Text>
                <InfoWrapper>
                    <LargeText red={100} green={0} blue={0}>
                        01
                        <SmallText>
                            Use Instagram & <br /> Facebook to increase <br />{" "}
                            conversions
                        </SmallText>
                    </LargeText>
                    <LargeText red={0} green={100} blue={0}>
                        01
                        <SmallText>
                            Improve your <br /> brand awareness <br /> using
                            analytics
                        </SmallText>
                    </LargeText>
                    <LargeText red={0} green={0} blue={100}>
                        01
                        <SmallText>
                            Design marketing <br /> materials that <br /> drive
                            sales
                        </SmallText>
                    </LargeText>
                </InfoWrapper>
            </Wrapper>
        </>
    );
}
