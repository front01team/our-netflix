import React, { useReducer, useState } from "react";
import styled, { css } from "styled-components";
import { IoAddOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

const CommonStyle = css`
  width: ${(props) => (props.btnSize ? props.btnSize : "2rem")};
  height: ${(props) => (props.btnSize ? props.btnSize : "2rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  padding: ${(props) => (props.paddingSize ? props.paddingSize : "5px")};
  border-radius: 50%;
  border: 2px solid ${(props) => (props.colorCode ? props.colorCode : "white")};
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
  margin-right: 10px;
`;

const AddBtnStyle = styled(IoAddOutline)`
  ${CommonStyle}
`;

const PickedBtnStyle = styled(IoMdCheckmark)`
  ${CommonStyle}
`;

function PickButton({
    btnSize,
    fontSize,
    paddingSize,
    colorCode,
    hoverBackColor,
    hoverColor,
    isPicked,
    setIsPicked,
    name,
}) {
    return (
        <div
            onClick={() => {
                setIsPicked((prev) => !prev);
            }}
        >
            {isPicked ? (
                <AddBtnStyle
                    btnSize={btnSize}
                    fontSize={fontSize}
                    paddingSize={paddingSize}
                    colorCode={colorCode}
                    hoverBackColor={hoverBackColor}
                    hoverColor={hoverColor}
                ></AddBtnStyle>
            ) : (
                <PickedBtnStyle
                    btnSize={btnSize}
                    fontSize={fontSize}
                    paddingSize={paddingSize}
                    colorCode={colorCode}
                    hoverBackColor={hoverBackColor}
                    hoverColor={hoverColor}
                ></PickedBtnStyle>
            )}
        </div>
    );
}

export default PickButton;
