import React, { useState } from "react";
import ModalMain from "../Modal/ModalMain";
import styled from "styled-components";
import { createPortal } from "react-dom";

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

function IntroContent() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <button onClick={() => setOpenModal(true)}>상세보기</button>
            {openModal &&
                createPortal(
                    <ModalContainer onClose={() => setOpenModal(false)}>
                        <ModalMask onClick={() => setOpenModal(false)} />
                        <ModalMain />
                    </ModalContainer>,
                    document.body
                )}
        </div>
    );
}

export default IntroContent;
