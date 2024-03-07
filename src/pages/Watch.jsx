import React from "react";
import VideoPlay from "../components/VideoPlay";
import useSearchVideo from "../hooks/useSearchVideo";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Watch() {
    const location = useLocation();
    const title = location.state.title;
    const imgPath = location.state.imgPath;
    const youtubePath = useSearchVideo(title);
    console.log("click");

    const WatchVideoStyle = styled.div`
        iframe {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
        }
    `;

    return (
        <WatchVideoStyle>
            {youtubePath && (
                <iframe
                    frameBorder="0"
                    src={`https://www.youtube.com/embed/${youtubePath}?controls=1&autoplay=1&loop=1&mute=1&playlist=${youtubePath}`}
                ></iframe>
            )}

            {!youtubePath && (
                <img
                    src="https://occ-0-8133-395.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSf-PzQJ-CcB9AuuTSUMbeKn99_tPHEJYBHfSwKvNMOlmaZn8ueOi1B4-jbbbuUxG_S77q4A0GHnVZgIGeF_wxkCP7O93e9u0Kq5.webp?r=dad"
                    style={{ filter: "brightness(70%)" }}
                    alt=""
                />
            )}

            {/* {youtubePath ? (
                <VideoPlay title={title} />
            ) : (
                <img src={imgPath} alt="poster" />
            )} */}
        </WatchVideoStyle>
    );
}

export default Watch;
