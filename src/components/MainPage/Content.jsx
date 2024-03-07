import { createPortal } from "react-dom";
import React, { useState } from "react";
import "./content.css";
import ArrowButton from "../ButtonComponent/ArrowButton";
import LikeButton from "../ButtonComponent/LikeButton";
import PickButton from "../ButtonComponent/PickButton";
import PlayButton from "../ButtonComponent/PlayButton";
import ModalMain from "../Modal/ModalMain";
import VideoPlay from "../VideoPlay";
import styled from "styled-components";
import ReactDOM from "react-dom";

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const ModalMask = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

function Content({ allData, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const tagText = allData.movie_info.slice(-1)[0].split(": ").slice(1);

    return (
        <div>
            <div
                className="content-Item"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={allData.poster} alt="poster" />
                {isHovered && (
                    <div>
                        <VideoPlay title={allData.name} />
                        <div className="item-info">
                            <div className="icons">
                                <PlayButton />
                                <PickButton />
                                <LikeButton />
                                <ArrowButton
                                    openModal={openModal}
                                    handleOpenModal={handleOpenModal}
                                    className="icon"
                                />
                            </div>
                            <div className="item-info-top">
                                <span>{allData.episode_detail[0].ep_time}</span>
                                <span className="limit">+15</span>
                                <span>{allData.year}</span>
                            </div>
                            <div className="desc">{tagText}</div>
                        </div>
                    </div>
                )}

                {ReactDOM.createPortal(
                    <Backdrop modalHandler={modalHandler} />,
                    document.getElementById("backdrop")
                )}
                {ReactDOM.createPortal(
                    <Overlay modalHandler={modalHandler} />,
                    document.getElementById("overlay")
                )}

                {/* <div>
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
                </div> */}
            </div>
        </div>
    );
}

export default Content;

const Backdrop = ({ modalHandler }) => {
    return (
        <PortalBackdrop onClick={() => modalHandler(false)}></PortalBackdrop>
    );
};

const Overlay = ({ modalHandler }) => {
    return <PortalOverlay>포탈에 사용할 내용</PortalOverlay>;
};
