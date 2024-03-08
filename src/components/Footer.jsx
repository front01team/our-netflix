import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const BackBack = styled.div`
    background-color: #141414;
    bottom: 0;
    width: 100%;
    height: 30%;
`;

const Logo = styled.div`
    display: center;
    text-align: start;
    margin-left: 440px;
    padding-top: 100px;
    margin-bottom: 17px;
`;

const StyledFacebookLogo = styled(FaFacebookF)`
    font-size: 1.3rem;
    color: white;
    margin-right: 25px;
    &:hover {
        cursor: pointer;
    }
`;

const StyledInstaLogo = styled(FaInstagram)`
    font-size: 1.3rem;
    color: white;
    margin-right: 25px;
    &:hover {
        cursor: pointer;
    }
`;

const StyledTwitterLogo = styled(FaTwitter)`
    font-size: 1.3rem;
    color: white;
    margin-right: 25px;
    &:hover {
        cursor: pointer;
    }
`;

const StyledYoutubeLogo = styled(FaYoutube)`
    font-size: 1.3rem;
    color: white;
    margin-right: 25px;
    &:hover {
        cursor: pointer;
    }
`;

const StyledInstruction = styled.div`
    font-size: 13px;
    color: white;
    margin-right: 175px;

    display: flex;
    flex-direction: column;
`;

const InstructionRow = styled.div`
    display: flex;
    flex-direction: row; // 각 섹션을 가로로 나열
    align-items: start;
    margin-left: 440px;
`;

const InstructionElement = styled.span`
    font-size: 13px;
    color: #808080;
    padding-right: 10px;
    padding-top: 17px;
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: #808080;
    }
`;

const ServiceCode = styled.button`
    background-color: #141414;
    font-size: 13px;
    color: #808080;
    border: 1px solid #808080;
    width: 95px;
    height: 37px;
    margin-left: 440px;
    margin-top: 40px;
    &:hover {
        cursor: pointer;
        color: white;
    }
`;

const StyledInfo = styled.div`
    background-color: #141414;
    display: flex;
    flex-direction: column;
    margin-left: 440px;
    margin-top: 22px;
`;

const InfoElement = styled.div`
    font-size: 11px;
    color: #808080;
    line-height: 170%;
    padding-bottom: 15px;
`;

const FairTrade = styled.div`
    font-size: 11px;
    color: #808080;
    line-height: 170%;
    padding-bottom: 15px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: #808080;
    }
`;

function Footer() {
    return (
        <BackBack>
            <Logo>
                <StyledFacebookLogo />
                <StyledInstaLogo />
                <StyledTwitterLogo />
                <StyledYoutubeLogo />
            </Logo>
            <InstructionRow>
                <StyledInstruction>
                    <InstructionElement>화면 해설</InstructionElement>
                    <InstructionElement>투자 정보(IR)</InstructionElement>
                    <InstructionElement>법적 고지</InstructionElement>
                </StyledInstruction>
                <StyledInstruction>
                    <InstructionElement>고객 센터</InstructionElement>
                    <InstructionElement>입사 정보</InstructionElement>
                    <InstructionElement>쿠키 설정</InstructionElement>
                </StyledInstruction>
                <StyledInstruction>
                    <InstructionElement>기프트카드</InstructionElement>
                    <InstructionElement>이용 약관</InstructionElement>
                    <InstructionElement>회사 정보</InstructionElement>
                </StyledInstruction>
                <StyledInstruction>
                    <InstructionElement>미디어 센터</InstructionElement>
                    <InstructionElement>개인정보</InstructionElement>
                    <InstructionElement>문의하기</InstructionElement>
                </StyledInstruction>
            </InstructionRow>
            <ServiceCode>서비스 코드</ServiceCode>
            <StyledInfo>
                <InfoElement>
                    넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
                    제2018-서울종로-0426호 전화번호:00-308-321-0161 (수신자
                    부담)
                    <br />
                    대표: 레지널드 숀 톰프슨
                    <br />
                    이메일 주소: korea@netflix.com
                    <br />
                    주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스
                    A동 20층 우편번호 03161
                    <br />
                    사업자등록번호: 165-87-00119
                    <br />
                    클라우드 호스팅: Amazon Web Services Inc.
                    <br />
                    <FairTrade>공정거래위원회 웹사이트</FairTrade>
                </InfoElement>
            </StyledInfo>
        </BackBack>
    );
}

export default Footer;
