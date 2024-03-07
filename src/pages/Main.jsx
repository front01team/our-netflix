import React, { useState, useEffect } from "react";
import Content from "../components/MainPage/Content";
import ContentList from "../components/MainPage/ContentList";
import VideoPlay from "../components/VideoPlay";

import PlayButton from "../components/ButtonComponent/PlayButton";
import PickButton from "../components/ButtonComponent/PickButton";
import LikeButton from "../components/ButtonComponent/LikeButton";
import ArrowButton from "../components/ButtonComponent/ArrowButton";
import Featured from "../components/MainPage/Featured";
import TopContent from "../components/MainPage/TopContent";

function Main() {
    const [isPicked, setIsPicked] = useState(true);
    const handleClick = () => {
        setIsPicked((prev) => !prev);
    };

    const [contentData, setContentData] = useState([]);

    useEffect(() => {
        fetch("/data/dataset.json")
            .then((response) => response.json())
            .then((data) => setContentData(data));
    }, []);

    contentData && console.log(contentData);

    return (
        <div>
            <Featured />
            <TopContent />
            {contentData &&
                contentData.map((series, index) => (
                    <ContentList
                        series={series}
                        key={`${series.category}-${index}`}
                    />
                ))}
        </div>
    );
}

export default Main;

{
    /* <Featured />
<ContentList />
            <ContentList /> */
}
{
    /* <InfoContent></InfoContent>
            <VideoPlay title={"듄"}></VideoPlay>

            <PickButton isPicked={isPicked} handleClick={handleClick} />
            <PlayButton />
            <LikeButton />
            <ArrowButton /> */
}
