import React from "react";
import styled from "styled-components";
function ModalMain() {
    return <DetailModal></DetailModal>;
}

export default ModalMain;

const DetailModal = styled.div`
    width: 80%;
    height: 80%;
    height: 800px;
    margin: 0 auto;
    position: absolute;
    top: 2rem;
    border-radius: 12px;
    border: 1px solid white;
`;
