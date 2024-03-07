import React, { useState } from "react";
import InfoContent from "../components/MainPage/IntroContent";
import Content from "../components/MainPage/Content";
import ContentList from "../components/MainPage/ContentList";
import VideoPlay from "../components/VideoPlay";

import PlayButton from "../components/ButtonComponent/PlayButton";
import PickButton from "../components/ButtonComponent/PickButton";
import LikeButton from "../components/ButtonComponent/LikeButton";
import ArrowButton from "../components/ButtonComponent/ArrowButton";

function Main() {
    const [isPicked, setIsPicked] = useState(true);
    const handleClick = () => {
        setIsPicked((prev) => !prev);
    };

    return (
        <div style={{ backgroundColor: "black" }}>
            <InfoContent></InfoContent>
            <VideoPlay title={"듄"}></VideoPlay>

            <PickButton isPicked={isPicked} handleClick={handleClick} />
            <PlayButton />
            <LikeButton />
            <ArrowButton />
        </div>
    );
}

export default Main;
