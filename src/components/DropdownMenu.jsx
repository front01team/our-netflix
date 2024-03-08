import React from "react";
import styled from "styled-components";
import useDetectClose from "../hooks/useDetectClose";
import { MdArrowDropDown } from "react-icons/md";
import { PiPencilDuotone } from "react-icons/pi";
import { PiUserSquareLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { FaRegQuestionCircle } from "react-icons/fa";

const ProfileImg = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 3px;
    cursor: pointer;
`;

const StyledArrow = styled(MdArrowDropDown)`
    font-size: 1.4rem;
    font-weight: bold;
    color: #ffffff;
    padding-bottom: 7px;
    cursor: pointer;
`;

const Menu = styled.div`
    background: #1f1e1e;
    position: absolute;
    top: 52px;
    left: 50%;
    width: 230px;
    text-align: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, 0);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 9;
    ${(props) => props.profileIsOpen && `opacity: 1; visibility: visible;`};
`;

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;

const Li = styled.li`
    margin-bottom: 10px;
    &:first-of-type {
        margin-top: 10px;
    }
`;

const LinkWrapper = styled.a`
    font-size: 15px;
    text-decoration: none;
    color: white;
`;

const StyledPencil = styled(PiPencilDuotone)`
    font-size: 25px;
    margin: 0 10px 0 13px;
`;

const StyledSquare = styled(PiUserSquareLight)`
    font-size: 25px;
    margin: 0 10px 0 13px;
`;

const StyledPerson = styled(RxPerson)`
    font-size: 25px;
    margin: 0 10px 0 13px;
`;

const StyledQuestion = styled(FaRegQuestionCircle)`
    font-size: 25px;
    margin: 0 10px 0 13px;
`;

const KidsLogoImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 10px 0 7px;
`;

const DivLine = styled.div`
    border-top: 1px solid #ffffff;
    width: 207px;
    margin: 17px 0 17px 0;
`;

const DropdownMenu = () => {
    const [profileIsOpen, profileRef, profileHandler] = useDetectClose(false);

    return (
        <Wrapper>
            <DropdownContainer
                ref={profileRef}
                onMouseLeave={() => profileHandler(false)}
                onMouseEnter={() => profileHandler(true)} // 마우스 진입시 드롭다운 메뉴 활성화
            >
                <ProfileImg
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                    alt="프로필사진"
                />
                <StyledArrow />
                <Menu profileIsOpen={profileIsOpen}>
                    <Ul>
                        <Li>
                            <LinkWrapper href="#1-1">
                                <KidsLogoImg
                                    src="https://images.ctfassets.net/9uhkiji6mhey/5dVvWjLeow0bEDqzBUlfex/7fef3dcd6bb3d3a2a349ec73bcb60e57/03_Netflix_Kids.jpg?q=100"
                                    alt="키즈프로필"
                                />
                                키즈
                            </LinkWrapper>
                        </Li>
                        <Li>
                            <LinkWrapper href="#1-2">
                                <StyledPencil />
                                프로필관리
                            </LinkWrapper>
                        </Li>

                        <Li>
                            <LinkWrapper href="#1-3">
                                <StyledSquare />
                                프로필이전
                            </LinkWrapper>
                        </Li>
                        <Li>
                            <LinkWrapper href="#1-4">
                                <StyledPerson />
                                계정
                            </LinkWrapper>
                        </Li>
                        <Li>
                            <LinkWrapper href="#1-5">
                                <StyledQuestion />
                                고객센터
                            </LinkWrapper>
                        </Li>
                        <Li>
                            <LinkWrapper href="#logout">
                                <DivLine />
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
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    &:hover {
        cursor: pointer;
    }
`;

const DropdownContainer = styled.div`
    position: relative;
    text-align: center;
`;
