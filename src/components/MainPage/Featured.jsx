import styled from "styled-components";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

const FeaturedStyled = styled.div`
  height: 90vh;
  position: relative;
  margin-bottom: 110px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  width: 35%;
  position: absolute;
  left: 50px;
  bottom: 270px;
  color: white;
  display: flex;
  flex-direction: column;

  img {
    width: 400px;
    padding-bottom: 30px;
  }

  .raked-text {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  .desc {
    margin: 20px 0px;
    color: #fff;
    font-size: 1.2vw;
    font-weight: 400;
    line-height: 1.3;
    margin-top: 0.1vw;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  }
`;

const Buttons = styled.div`
  display: flex;

  button {
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
  }

  .play {
    background-color: white;
    color: black;

    &:hover {
      filter: brightness(80%);
    }
  }

  .more {
    background-color: gray;
    color: white;

    &:hover {
      filter: brightness(80%);
    }
  }

  span {
    margin-left: 5px;
  }
`;

const Featured = () => {
  return (
    <FeaturedStyled>
      <img
        src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSf-PzQJ-CcB9AuuTSUMbeKn99_tPHEJYBHfSwKvNMOlmaZn8ueOi1B4-jbbbuUxG_S77q4A0GHnVZgIGeF_wxkCP7O93e9u0Kq5.webp?r=dad"
        style={{ filter: "brightness(70%)" }}
        alt=""
      />
      <Info>
        <img
          src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXCWQ4AndXD_b5nxIHpoMMGCk-TEU9W6vAtgGfGXDGh1_Dn_NbirH6HARYOhMhfQHW3H31PtoLl9BQwhGNIMnIk6XMRGP0vUOh0iTRYsL9U.webp?r=1fc"
          alt=""
        />
        <span className="raked-text">오늘 영화 순위 3위</span>
        <span className="desc">
          싱글 라이프에 관한 책을 함께 만들게 된 두 사람. 혼자 사는 삶에 대해
          정반대의 가치관을 가진 그들이 어느덧 서로에게 끌리기 시작한다.
        </span>
        <Buttons>
          <button className="play">
            <FaPlay size={24} />
            <span>재생</span>
          </button>
          <button className="more">
            <IoIosInformationCircleOutline size={30} />
            <span>상세 정보</span>
          </button>
        </Buttons>
      </Info>
    </FeaturedStyled>
  );
};

export default Featured;
