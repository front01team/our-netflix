import React from "react";
import styled from "styled-components";

const EpisodeBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 10fr;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid gray;
    background-color: ${(props) =>
        props.index == 0 ? "#333333" : "transparent"};

    > div:nth-child(1) {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
    }
    div:nth-child(2) img {
        width: 100%;
    }
`;

const EpisodeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.1rem 2rem 1.1rem 1rem;
    div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        font-size: 1.1rem;
        font-weight: bold;
    }
`;

function EpisodeContent({ episode, index }) {
    return (
        <EpisodeBox index={index}>
            <div>{index + 1}</div>
            <div>
                <img src={episode?.ep_img} alt="episode-image" />
            </div>
            <EpisodeInfo>
                <div>
                    <div>{index + 1}화</div>
                    <div>{episode?.ep_time}</div>
                </div>
                {/* <div>{episode.related_description}</div> */}
                <div>
                    자유로운 영혼을 지닌 그녀. 그녀에게 마음을 뺏긴 건축가.
                    한여름 꿈같았던 로맨스는 다시 시작될 수 있을까. 서울의
                    거리에서, 열정 넘치는 그 남자가 사랑을 찾고 있다.
                </div>
            </EpisodeInfo>
        </EpisodeBox>
    );
}

export default EpisodeContent;
