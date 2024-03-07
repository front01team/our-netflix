import { useState, useEffect } from "react";

function useSearchVideo(initialForm) {
    const [youtubePath, setYoutubePath] = useState("");
    const title = initialForm;

    const searchData = async () => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer b5c08be09dadfe45dd2f6936fc22f3b3",
            },
        };

        let getData = await fetch(
            `https://api.themoviedb.org/3/search/multi?query=${title}&language=ko-KR&page=1&api_key=b5c08be09dadfe45dd2f6936fc22f3b3`,
            options
        ).then((res) => res.json());

        let result = getData?.results[0];
        let [videoId, videoType] = [result?.id, result?.media_type]; //1060057

        let getKeyData = await fetch(
            `https://api.themoviedb.org/3/${videoType}/${videoId}/videos?language=ko-KR&page=1&api_key=b5c08be09dadfe45dd2f6936fc22f3b3`,
            options
        ).then((res) => res.json());

        let Keyresult = getKeyData?.results?.[0]?.key;
        console.log("Keyresult", Keyresult);
        setYoutubePath(Keyresult);
    };

    // 처음 렌더링될 때만 데이터 받기
    useEffect(() => {
        searchData();
        console.log(youtubePath);
    }, []);

    return youtubePath;
}

export default useSearchVideo;
