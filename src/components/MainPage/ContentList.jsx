import Content from "../MainPage/Content";
import "./contentlist.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useRef, useState } from "react";

function ContentList() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${920 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-920 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <div className="list-title">콘크리트 유토피아와 비슷한 콘텐츠</div>
      <div className="wrapper">
        <div
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        >
          <MdOutlineArrowBackIosNew />
        </div>
        <div className="container" ref={listRef}>
          <Content index={0} />
          <Content index={1} />
          <Content index={2} />
          <Content index={3} />
          <Content index={4} />
          <Content index={5} />
          <Content index={6} />
          <Content index={7} />
          <Content index={8} />
          <Content index={9} />
          <Content index={10} />
          <Content index={11} />
          <Content index={12} />
          <Content index={13} />
          <Content index={14} />
          <Content index={15} />
          <Content index={16} />
          <Content index={17} />
          <Content index={18} />
          <Content index={19} />
          <Content index={20} />
          <Content index={21} />
          <Content index={22} />
          <Content index={23} />
          <Content index={24} />
          <Content index={25} />
        </div>
        <div className="sliderArrow right" onClick={() => handleClick("right")}>
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </div>
  );

export default ContentList;
