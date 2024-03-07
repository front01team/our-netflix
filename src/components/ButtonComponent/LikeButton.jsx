import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";

const LikeBtnStyle = styled(AiOutlineLike)`
    width: ${(props) => (props.btnSize ? props.btnSize : "2rem")};
    height: ${(props) => (props.btnSize ? props.btnSize : "2rem")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
    padding: ${(props) => (props.paddingSize ? props.paddingSize : "5px")};
    border-radius: 50%;
    border: 2px solid
        ${(props) => (props.colorCode ? props.colorCode : "white")};
    cursor: pointer;
    color: ${(props) => (props.colorCode ? props.colorCode : "white")};
    background-color: ${(props) =>
        props.colorCode ? props.colorCode : "transparent"};
    &:hover {
        background-color: ${(props) =>
            props.hoverBackColor ? props.hoverBackColor : "#444444"};
        color: ${(props) => (props.hoverColor ? props.hoverColor : "white")};
    }
    &:active {
        background-color: ${(props) =>
            props.hoverBackColor ? props.hoverBackColor : "#bababa"};
        color: ${(props) => (props.hoverColor ? props.hoverColor : "white")};
    }
`;

function LikeButton({
    btnSize,
    fontSize,
    paddingSize,
    colorCode,
    hoverBackColor,
    hoverColor,
}) {
    return (
        <LikeBtnStyle
            btnSize={btnSize}
            fontSize={fontSize}
            paddingSize={paddingSize}
            colorCode={colorCode}
            hoverBackColor={hoverBackColor}
            hoverColor={hoverColor}
        ></LikeBtnStyle>
    );
}

export default LikeButton;
