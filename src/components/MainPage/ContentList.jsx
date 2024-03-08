import Content from "../MainPage/Content";
import "./contentlist.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useRef, useState } from "react";

function ContentList({ series }) {
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
            listRef.current.style.transform = `translateX(${
                -920 + distance
            }px)`;
        }
    };

    return (
        <div className="list">
            <h className="list-title">{series.category}</h>
            <div className="wrapper">
                <div
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                >
                    <MdOutlineArrowBackIosNew />
                </div>
                <div className="container" ref={listRef}>
                    {series &&
                        series.all_data.map((allData, index) => (
                            <Content
                                allData={allData}
                                key={`${allData.name}-${index}`}
                            />
                        ))}
                </div>
                <div
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                >
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
        </div>
    );
}

export default ContentList;
