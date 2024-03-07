import React, { useEffect, useState } from "react";
import styled from "styled-components";

import EpisodeContent from "./EpisodeContent";
import RelatedContent from "./RelatedContent";

const modalWidth = {
    default: "80%",
    smallScreen: "90%",
};

const modalBackgroundColor = "#181818";
const modalTextColor = "#d2d2d2";

const DetailModal = styled.div`
    width: 70%;
    height: 100vh;
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 12px;
    background-color: ${modalBackgroundColor};
    overflow: scroll;

    font-size: 14px;
    line-height: 24px;
    color: ${modalTextColor};

    max-width: ${modalWidth.default};

    @media screen and (max-width: 768px) {
        max-width: ${modalWidth.smallScreen};
    }
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 3rem;
    gap: 2rem;
`;

const ModalHeader = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
    }

    div {
        width: 100%;
        background: linear-gradient(0deg, #181818, 50%);
        background-color: white;
        position: absolute;
        top: 0;
    }
`;

const ModalInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    span:nth-child(1) {
        color: lightgreen;
    }
`;

const ModalInfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const ModalInfoRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ModalEpisodeBox = styled.div`
    font-size: 14px;
    line-height: 24px;
`;

const ModalRelatedBox = styled.div`
    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
`;

const ModalFooter = styled.div``;

function ModalMain() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data/dataset.json")
            .then((response) => response.json())
            .then((data) => setData(data?.[0].all_data[0]));
    }, []);

    data && console.log(data);

    return (
        <DetailModal>
            <ModalHeader>
                <img src={data.poster} alt="poster" />
                <div></div>
            </ModalHeader>
            <ModalContent>
                <ModalInfoBox>
                    <ModalInfoLeft>
                        <div>
                            <span>98% 일치</span>
                            <span>{data.year}</span>
                            <span>{data.all_episode}</span>
                        </div>
                        <h2>오늘의 TOP 영상 5위</h2>
                        <div>{data.description}</div>
                    </ModalInfoLeft>
                    <ModalInfoRight>
                        {data.length !== 0 &&
                            data.movie_info.map((script) => (
                                <div>
                                    <span style={{ color: "gray" }}>
                                        {script.split(":")[0]}:
                                    </span>
                                    <span>{script.split(":")[1]}</span>
                                </div>
                            ))}
                    </ModalInfoRight>
                </ModalInfoBox>

                <ModalEpisodeBox>
                    <h2>회차</h2>
                    {data.length !== 0 &&
                        data.episode_detail.map((episode, index) => (
                            <EpisodeContent episode={episode} index={index} />
                        ))}
                </ModalEpisodeBox>

                <ModalRelatedBox>
                    <h2>함께 시청된 콘텐츠</h2>
                    <div>
                        {data.length !== 0 &&
                            data.related_detail.map((related) => (
                                <RelatedContent related={related} />
                            ))}
                    </div>
                </ModalRelatedBox>
            </ModalContent>
        </DetailModal>
    );
}

export default ModalMain;
