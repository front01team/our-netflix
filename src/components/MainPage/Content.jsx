import { createPortal } from "react-dom";
import React, { useState, useEffect } from "react";
import "./content.css";
import ArrowButton from "../ButtonComponent/ArrowButton";
import LikeButton from "../ButtonComponent/LikeButton";
import PickButton from "../ButtonComponent/PickButton";
import PlayButton from "../ButtonComponent/PlayButton";
import ModalMain from "../Modal/ModalMain";
import VideoPlay from "../VideoPlay";
import styled from "styled-components";
import Modal from "../Modal/Modal";

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
`;

const ModalMask = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

function Content({ allData, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const tagText = allData?.movie_info.slice(-1)[0].split(": ").slice(1);
    // const handleModal = () => {
    //     setIsModalOpen(true);
    // };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isModalOpen]);

    return (
        <div>
            <div
                className="content-Item"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={allData?.poster} alt="poster" />
                {isHovered && (
                    <div>
                        <VideoPlay title={allData?.name} />
                        <div className="item-info">
                            <div className="icons">
                                <PlayButton />
                                <PickButton />
                                <LikeButton />
                                <ArrowButton setIsModalOpen={setIsModalOpen} />
                            </div>
                            <div className="item-info-top">
                                <span>
                                    {allData?.episode_detail[0].ep_time}
                                </span>
                                <span className="limit">+15</span>
                                <span>{allData?.year}</span>
                            </div>
                            <div className="desc">{tagText}</div>
                        </div>
                    </div>
                )}
                {isModalOpen && (
                    <Modal setIsModalOpen={setIsModalOpen} allData={allData} />
                )}
            </div>
        </div>
    );
}

export default Content;

{
    /* <div>
    {openModal &&
        createPortal(
            <ModalContainer onClose={() => setOpenModal(false)}>
                <ModalMask
                    onClick={() => setOpenModal(false)}
                />
                <ModalMain allData={allData} />
            </ModalContainer>,
            document.body
        )}
</div> */
}
