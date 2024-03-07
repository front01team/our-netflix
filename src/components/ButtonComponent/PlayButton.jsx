import React from "react";
import styled from "styled-components";
import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";

const PlayBtnStyle = styled(IoIosPlay)`
    width: ${(props) => (props.btnSize ? props.btnSize : "2rem")};
    height: ${(props) => (props.btnSize ? props.btnSize : "2rem")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "3rem")};
    padding: ${(props) => (props.paddingSize ? props.paddingSize : "5px")};
    border-radius: 50%;
    border: 2px solid
        ${(props) => (props.colorCode ? props.colorCode : "white")};
    cursor: pointer;
    color: ${(props) => (props.colorCode ? props.colorCode : "black")};
    background-color: ${(props) =>
        props.colorCode ? props.colorCode : "white"};

    &:hover {
        background-color: ${(props) =>
            props.hoverBackColor ? props.hoverBackColor : "#d2d2d2"};
        border-color: ${(props) =>
            props.hoverBackColor ? props.hoverBackColor : "#d2d2d2"};
    }
    &:active {
        background-color: ${(props) =>
            props.hoverBackColor ? props.hoverBackColor : "#d2d2d2"};
        color: ${(props) => (props.hoverColor ? props.hoverColor : "white")};
    }
`;

function PlayButton({
    btnSize,
    fontSize,
    paddingSize,
    colorCode,
    hoverBackColor,
    hoverColor,
}) {
    return (
        <Link to="">
            <PlayBtnStyle
                btnSize={btnSize}
                fontSize={fontSize}
                paddingSize={paddingSize}
                colorCode={colorCode}
                hoverBackColor={hoverBackColor}
                hoverColor={hoverColor}
            ></PlayBtnStyle>
        </Link>
    );
}

export default PlayButton;
