import React from "react";
import styles from "./Header.css";
import { useState } from "react";
import HeaderSearchBar from "./HeaderSearchBar";
import { AiFillAlert } from "react-icons/ai";
import styled from "styled-components";
import { FaRegBell } from "react-icons/fa6";

// left-header-menu-bar 누르면 스크롤이 맨위로 올라감 <TOP> 이것처럼
// 화면 축소하면 left-menu-bar 가 메뉴 토글창으로 변함

const RightMenuBarElement = styled.div`
  padding: 0 10px 0 10px;
`;

const Header = () => {
  return (
    <div className="background">
      <div>
        <div className="dkdkdk">
          <div className="netflix-logo">
            <img
              src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
              alt="Netflix_Logo_CMYK"
            />
          </div>
          <div className="left-header-menu-bar">
            <div className="left-header-menu-bar-element">홈</div>
            <div className="left-header-menu-bar-element">시리즈</div>
            <div className="left-header-menu-bar-element">영화</div>
            <div className="left-header-menu-bar-element">
              NEW! 요즘 대세 콘텐츠
            </div>
            <div className="left-header-menu-bar-element">내가 찜한 리스트</div>
            <div className="left-header-menu-bar-element">
              언어별로 찾아보기
            </div>
          </div>
        </div>
      </div>
      <div className="right-header-menu-bar">
        <div className="right-header-menu-bar-element">
          <HeaderSearchBar size="234" color="blue" />
          {/*돋보기 아이콘*/}
        </div>
        <RightMenuBarElement>키즈</RightMenuBarElement>
        <div className="right-header-menu-bar-element">
          <FaRegBell size="10rem" />
        </div>
        <div className="right-header-menu-bar-element">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="프로필"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
