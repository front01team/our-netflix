import React, { useState } from "react";
import styled from "styled-components";
import PlayButton from "./ButtonComponent/PlayButton";
import LikeButton from "./ButtonComponent/LikeButton";
import PickButton from "./ButtonComponent/PickButton";
import ArrowButton from "./ButtonComponent/ArrowButton";

const Layout = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
`;

const ContentBox = styled.div`
    position: relative;
    /* background-color: yellow; */
    /* width: 100px; */
    /* height: 100px; */
    font-size: 3rem;
    font-weight: bold;
    border: 1px solid black;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
    }
`;

const ExpandContent = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(50%, -50%);
    background-color: #141414;
    box-shadow: 0px 0px 5px #444;
    z-index: 10;
`;

const ContentControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #141414;
    div {
        display: flex;
        gap: 1rem;
    }
`;

const ContentInfo = styled.div`
    width: 100%;
    padding: 1rem;
`;

function PickContent({ pickData, index }) {
    // const [isHovered, setIsHovered] = useState(Array(10).fill(false));
    const [isHovered, setIsHovered] = useState(Array(10).fill(true));

    const handleModalOpen = (index) => {
        // setIsHovered((prev) => prev.map((e, i) => (i === index ? true : e)));
    };

    const handleModalClose = (index) => {
        // setIsHovered((prev) => prev.map((e, i) => (i === index ? false : e)));
    };

    return (
        <Layout>
            <ContentBox key={index}>
                <img
                    src={pickData.poster}
                    alt="Pick"
                    onMouseEnter={() => handleModalOpen(index)}
                />
                {isHovered[index] && (
                    <ExpandContent
                        className="big"
                        onMouseLeave={() => handleModalClose(index)}
                    >
                        <img
                            src={pickData.poster}
                            alt="Pick"
                            onMouseEnter={() => handleModalOpen(index)}
                        />
                        <ContentInfo>
                            <ContentControl>
                                <div>
                                    <PlayButton
                                        btnSize={"1.2rem"}
                                        fontSize={"3rem"}
                                    />
                                    <PickButton
                                        btnSize={"1.2rem"}
                                        fontSize={"3rem"}
                                    />
                                    <LikeButton
                                        btnSize={"1.2rem"}
                                        fontSize={"3rem"}
                                    />
                                </div>
                                <ArrowButton
                                    btnSize={"1.2rem"}
                                    fontSize={"3rem"}
                                />
                            </ContentControl>
                            <div>INFOBOX</div>
                        </ContentInfo>
                    </ExpandContent>
                )}
            </ContentBox>
        </Layout>
    );
}

export default PickContent;
