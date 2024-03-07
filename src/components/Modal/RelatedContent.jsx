import React from "react";
import styled from "styled-components";
import PickButton from "../ButtonComponent/PickButton";

function RelatedContent({ related }) {
    const RelatedCard = styled.div`
        width: 30%;
        border-radius: 8px;
        overflow: hidden;

        background-color: #141414;
        text-align: left;

        img {
            width: 100%;
            height: auto;
        }
    `;

    const RelatedInfo = styled.div`
        height: 60%;
        overflow: hidden;
        padding-bottom: 1rem;
        posiion: absolute;
        padding: 1rem;
        z-index: 2;
        background-color: #333333;
    `;

    const RelatedControl = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin: 0 auto;
        font-size: 1rem;

        > div {
            display: flex;
            > div {
                margin-right: 1rem;
            }
        }
    `;

    return (
        <RelatedCard>
            <img src={related?.related_img} alt="연관컨텐츠" />
            <RelatedInfo>
                <RelatedControl>
                    <div>
                        <div>15+</div>
                        <div>HD</div>
                        <div>2023</div>
                    </div>
                    <PickButton size={"3rem"}></PickButton>
                </RelatedControl>
                <p>{related?.related_description}</p>
            </RelatedInfo>
        </RelatedCard>
    );
}

export default RelatedContent;
