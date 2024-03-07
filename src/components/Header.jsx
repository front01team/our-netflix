import React from "react";
import { useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import styled from "styled-components";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

import DropdownMenu from "./DropdownMenu";

// left-header-menu-bar 누르면 스크롤이 맨위로 올라감 <TOP> 이것처럼
// 화면 축소하면 left-menu-bar 가 메뉴 토글창으로 변함

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #070505;
  padding-top: 0;
`;

const Dkdkdk = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NetflixLogo = styled.div`
  height: 75px;
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: end;

  margin: 0 25px 0 38px;
`;

const NetflixLogoImg = styled.img`
  height: 75px;
  width: 110px;
  display: block;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: end;
  &:hover {
    cursor: pointer;
  }
`;

const LeftMenuBar = styled.div`
  display: flex;
  flex-direction: flex;
  align-items: center;
  font-size: 14px;
  color: #dadada;
  font-weight: bold;
`;

const LeftElement = styled.div`
  padding: 0 10px 0 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  &:active {
    color: #ffffff;
  }
`;

////////////

const RightMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: #dadada;
  font-weight: bold;
  margin-right: 50px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: #dadada;
  font-weight: bold;
  margin-right: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const SearchIcon = styled.div`
  vertical-align: middle;
  display: inline-block;
`;
const SearchingTool = styled.div`
  padding: 0 10px 0 10px;
  transition-duration: 3s;
`;

const StyledIoSearch = styled(IoSearch)`
  vertical-align: middle;
  display: inline-block;
  font-size: 2rem;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

/*돋보기*/
const SearchIconImg = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <SearchingTool>
      <StyledIoSearch onClick={handleSearchIconClick} />
      {isSearchOpen && <input type="text" placeholder="제목, 사람, 장르" />}
    </SearchingTool>
  );
};

const RightElement = styled.div`
  padding: 0 10px 0 10px;
  vertical-align: middle;
  display: inline-block;
  flex-basis: auto;
  &:hover {
    cursor: pointer;
  }
`;

const BellIconImg = styled(FaRegBell)`
  /*알림종*/
  font-size: 1.2rem;
  color: #ffffff;
`;

const ProfileImg = styled.img`
  /*프로필*/
  width: 35px;
  height: 35px;
  border-radius: 3px;
`;

const Header = () => {
  return (
    <Background>
      {/* <div> */}
      <Dkdkdk>
        <NetflixLogo>
          <NetflixLogoImg
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
            alt="Netflix_Logo_CMYK"
          />
        </NetflixLogo>

        <LeftMenuBar>
          <LeftElement>홈</LeftElement>
          <LeftElement>시리즈</LeftElement>
          <LeftElement>영화</LeftElement>
          <LeftElement>NEW! 요즘 대세 콘텐츠</LeftElement>
          <LeftElement>내가 찜한 리스트</LeftElement>
          <LeftElement>언어별로 찾아보기</LeftElement>
        </LeftMenuBar>
      </Dkdkdk>
      {/* </div> */}
      <RightMenuBar>
        <SearchIcon>
          <SearchIconImg /*돋보기 아이콘*/ />
        </SearchIcon>
        <RightElement>키즈</RightElement>
        <RightElement>
          <BellIconImg /*종 아이콘*/ />
        </RightElement>
        <RightElement>
          <DropdownMenu />
        </RightElement>
      </RightMenuBar>
    </Background>
  );
};

export default Header;
