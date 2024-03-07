import React, { useState } from "react";
import styled from "styled-components";
import useDetectClose from "./hooks/useDetectClose";
import { MdArrowDropDown } from "react-icons/md";
import { PiPencilDuotone } from "react-icons/pi";

const ProfileImg = styled.img`
    /* 프로필 이미지 스타일 */
    width: 35px;
    height: 35px;
    border-radius: 3px;
    cursor: pointer;
    &:hover + div {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 0);
        left: 50%;
    }
`;

const StyledArrow = styled(MdArrowDropDown)`
    /* 프로필 화살표 스타일 */
    font-size: 1.4rem;
    font-weight: bold;
    color: #ffffff;
    padding-bottom: 7px;
    cursor: pointer;
    &:hover + div {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 0);
        left: 50%;
    }
`;

const Menu = styled.div`
    background: gray;
    position: absolute;
    top: 52px;
    left: 50%;
    width: 230px;
    text-align: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    opacity: ${(props) => (props.profileIsOpen ? 1 : 0)};
    visibility: ${(props) => (props.profileIsOpen ? "visible" : "hidden")};
    transform: translate(-95%, 0);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 9;

    &:hover {
        transform: translate(-95%, 0);
    }

    &:after {
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        top: -3px;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 12px solid transparent;
        border-top-width: 0;
        border-bottom-color: gray;
    }
`;

const Ul = styled.ul`
    & > li {
        margin-bottom: 10px;
    }

    & > li:first-of-type {
        margin-top: 10px;
    }

    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
    font-size: 15px;
    text-decoration: none;
    color: white;
`;

const StyledPencil = styled(PiPencilDuotone)`
    font-size: 20px;
`;

const DropdownMenu = () => {
    const [profileIsOpen, profileRef, profileHandler] = useDetectClose(false);

    return (
        <Wrapper>
            <DropdownContainer
                ref={profileRef}
                onMouseLeave={() => profileHandler(false)}
            >
                <ProfileImg
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                    alt="프로필사진"
                    onMouseEnter={() => profileHandler(true)}
                />
                <StyledArrow />
                <Menu $profileIsOpen={profileIsOpen}>
                    <Ul>
                        <Li>
                            <LinkWrapper href="#1-1">키즈</LinkWrapper>
                        </Li>
                        <Li>
                            <LinkWrapper href="#1-2">
                                <StyledPencil />
                                프로필관리
                            </LinkWrapper>
                        </Li>
                        <Li>
                            <LinkWrapper href="#1-3">프로필이전</LinkWrapper>
                        </Li>
                        <Li>
                            <LinkWrapper href="#1-4">계정</LinkWrapper>
                        </Li>
                        <Li>
                            <LinkWrapper href="#1-5">고객센터</LinkWrapper>
                        </Li>
                        <Li>
                            <LinkWrapper href="#1-1">
                                넷플릭스에서 로그아웃
                            </LinkWrapper>
                        </Li>
                    </Ul>
                </Menu>
            </DropdownContainer>
        </Wrapper>
    );
};

export default DropdownMenu;

const Wrapper = styled.div`
    padding: 0 10px 0 10px;
    vertical-align: middle;
    display: inline-block;
    flex-basis: auto;
    &:hover {
        cursor: pointer;
    }
`;

const DropdownContainer = styled.div`
    position: relative;
    text-align: center;
`;
