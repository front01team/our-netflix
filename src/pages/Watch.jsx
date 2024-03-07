import React from "react";
import VideoPlay from "../components/VideoPlay";
import useSearchVideo from "../hooks/useSearchVideo";

function Watch({ title, imgPath }) {
    const youtubePath = useSearchVideo(title);

    return (
        <div>
            {youtubePath ? (
                <VideoPlay title={title} />
            ) : (
                <img src={imgPath} alt="poster" />
            )}
        </div>
    );
}

export default Watch;
