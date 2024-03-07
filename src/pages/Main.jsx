import React, { useState, useEffect } from "react";
import ContentList from "../components/MainPage/ContentList";
import Featured from "../components/MainPage/Featured";
import TopContent from "../components/MainPage/TopContent";
import styled from "styled-components";

const mainData = {
    name: "싱글 인 서울",
    poster: "https://occ-0-8158-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABc5Odnq7sK2ao1Xn0lKf0N20B9OYHn25nscNTKfBaNnShFJMieIsX5F-E5hl04zf09PLWL8y_6zqwIvdtSDH3ZKONXMsIjVgLOBZjVP5eY1lnVCGtdu6jXKCCSqCsG-iBqBAOcQrailDy1BYZZSU_wASwAYKZjgAc4uIcs3upSUEFfmri6e92BE5PnhbWN9OYkMjqfNfi4odhGoRN1T98gkxwfgzE6ONX_lf_p1rUrgEFkRvfRp2XsuM8jjfqYeN6N5ZMQwwUeUhEQIWLAtCFVwWZNSW.webp?r=d14",
    year: "2022",
    all_episode: "1시간 43분",
    description:
        "15+\n뜻밖의 돌풍은 행운일까, 불운일까. 패러글라이딩 사고로 북한에 불시착한 재벌 딸. 그곳에서 깐깐한 북한군 장교를 만난다. 이 와중에 피어오르는 낯선 감정은 뭐지?\n \n재생\n상세 정보",
    movie_info: [
        "출연: 이동욱, 임수정, 이솜, 더 보기",
        "장르: 로맨틱 코미디 영화, 코미디 영화, 로맨틱한 영화",
        "영화 특징: 로맨틱",
    ],
    episode_detail: [],
    related_detail: [
        {
            related_img:
                "https://occ-0-8158-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUAHPqV2Up8Txk8It36eGe9X7K2OcVuLsxpVB_DsuIapZQZ3nklek9QADTyrMrW4NjmVuHrGlQwnpul_nCYlEp0CQwp5yiPZn_Y.webp?r=ee8",
            related_description:
                "자신을 별 볼 일 없는 대마초 중독자 정도로 여기던 한 남자가 CIA의 제거 대상이 되자 최정예 스파이로 훈련받은 그의 잊혀진 능력이 꿈틀대며 되살아난다.",
        },
        {
            related_img:
                "https://occ-0-8158-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcoi3SLZPSmZrKpjAbbddOGnwzAQtK4pA5dI6dCMKDRFfUMKTw3ZxNz4kE4BcfKQRfgBvNJRpBCWcr9nEMZb0yBA-YMo6q5pkD0ojDH2mXvdvu1hbqOMGudfOjejEHzfY8KBwcwukgnLZt52V5MAeVoDHHoxanxsmfXxCW1HtnH74Fhh4ZZnnhB5cBHaKy48G3_hUrKH0boEyZvIuJVxbuY7l8x7EDoOBAa5S0H1w7S5nC7qND1u_Z2mPeAmwvR3El-kPGJPs-_vPOKsBrhlddDShr1_vArhYED9wGkia-PCAb6IOYhtahlYQLR8SYH3BVqyWn0zdRHWuqUrKazjzkdE21IlpDqH5JnOfquxGQD87c9DAyhNQ7pS219eiHiJf5wzFbS3cOdESkwy9ZIlVAkYAzesSl0ET8kMBkonD7f4Xdx8KjjUExPTcfJvGfNDq5j-nRZHClF5N1zB2nS2BqwAkn4Wrt9mLHFv6ecqMzmZJXPyKuDtnd7i7p9Z0lifyF0.webp?r=d0c",
            related_description:
                "백억 원대 소송에 휘말렸다. 번아웃이 왔다. 각자의 이유로 인생 최대 슬럼프에 빠진 의사들. 그들의 ‘망한 인생’ 심폐 소생기를 그린 로맨틱 코미디 드라마.",
        },
        {
            related_img:
                "https://occ-0-8158-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSbKTDy2TvviA0xzyssfEmQfAjs0llOHxddxqaSYiDP_8Pa7mFfz4_OxIPxnZFf3Y5WCtNlQUSnHK7FnPe-PZD31BkLKJbTc5rY.webp?r=4ff",
            related_description:
                "가벼운 만남과 인간미 없는 데이팅 앱의 시대. 19금 칼럼을 떠맡은 신입 기자와 냉소적인 20대 여자가 데이트의 딜레마에 빠진다.",
        },
        {
            related_img:
                "https://occ-0-8158-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb8JwxBL0MYhqalqjjgCS7GSMRhkzMSlJc3oJ_zDfxtsq7Y8lByQRZ7TqRb_g2-BHpswJdF_pTDTGU8oBHrnw-y7rlTy4X4OfNtIVdD-mCuUZfsHPCYfngSiXpx8E9xICC8EEwZEb6Rw4B7kxsi5NtPyCiIRbCUjl7bVr9v5xOT_kEo33v08kWahF0N8JR71Gg92EcZzIth2tnzKFiPpYoRGXPGPQN4__57AGCe4zII-fYXYf42GxAdaJgYPUJoBScrzpst4aOv_Tzon9d6n6z4SAQOMxIYQ7JRaAGs9I5Wyuf4HfDF97BMFnGs2NMD422qPyzM6tcY21xCSnkkackRZ-TalTe3MArFGQGDogzC_zQ4IJg.jpg?r=701",
            related_description:
                "탈북자 기완은 낯선 땅 벨기에에서 난민 지위를 인정받고자 사투를 벌인다. 가진 것은 없어도 간절하게 살고 싶은 기완과 삶의 이유를 잃어버린 마리. 그들이 서로에게 이끌리듯 빠져든다.",
        },
        {
            related_img:
                "https://occ-0-8158-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWg3BkcWLz5YflwYoOmse0kFwSdWEk0vfTri5GHKtB4-XW3ljmp0T1d6B4MgCjfzyV-yIbwlqWWDL06cZtJHlxwcQcBSYtm5z8KVZf4298ouXPc3eInxhhSp_8cEfCiXEJuYfQS3lNzsjkuqRT5uXU590YWfXZwMs40aRRFC96IyEk38RCUgAk7OA3mKGXvwa2FFpfdo68oapYpYLVh12rmyeLQAOvPjRG3sZJIFPJmwjCWz4d8wySy1sqHFixk_udCjWNXg670wxxlXpA301QsAC6YTTtR4-F1kxa2L0cvF4-Dal13L8a-lizsH_YcCPKT2Ue1AKnsOi_lN1dO97em3dVHu40F6uDSwta86-MEmlwvTYMUHrvzOmfGOs3e0huRdDLW081M4LjUxTSsn6DbZ7oSzCrPqZs5IXDe6fbPrCtrbICJpBI8zKBilh8MLqegybhyjBZOBwX83iB1RJ7K38R8ZueWzzdJ4JRp7jHsVk09NYJ4smp_9PkqgXO5fheM.webp?r=e98",
            related_description:
                "다른 사람의 마음속 목소리가 들리는 여자. 그래서 사랑을 포기했던 그녀 앞에 낯선 언어로 생각하는 다정한 한국인 유학생이 나타난다. 그리고 새로운 사랑의 설렘이 시작된다.",
        },
        {
            related_img:
                "https://occ-0-8158-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQl_BK4S1ys7zpbBjzufYWHij3RfKGeNXYcw6CmjrgtOVrSrtXXvT3vVuw7CMk8-PYYeXutVRbaf6cyvsTTSON-MYrKDR1iIkqC7ztuJ1O8Ix60hA3OP1IhcHgdFrepbI2YgtMj0Ao0NPBY-Ty8oBSpPEJ7Xbj4JuRLQ4oTcchYVFojzK5fvDuoOBg0jdxhpqQiDUAzcoof9exgmC4Jii94_gj05fZpxeWUw7aLUO1B4bMJh0ZLBhHNnoQspb_w1QUsR6K0pOtSsRdxrLNHS7iR9X57XJqnjrbZPc4frMvGGrSAfEZBsmF_6L9VAM-s-6mmX3xcSqyYpUstQBkTasX6HHcaOsjut3X06UEoZRPE2maAXNFx3_xMn5mySKHSgLxxYH2uN6oIzJ2clVD6GLotuUssRGy6iC9D73PdiShN8QMljzDkkIjkMxO7c50bUaBdYc2gVcmXgK5oEnVWz8faQwAXdei8lbTv8KngN8XJfgA91eOx4gG1OgDUTzlIdGG4.webp?r=f96",
            related_description:
                "왕실의 권력 다툼에 놓인 조선의 임금. 복수를 꿈꾸며 임금의 삶에 발을 들인 매혹적인 여인. 두 사람 사이에서 의도치 않은 사랑이 피어나기 시작한다.",
        },
    ],
};

const ContentListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;
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
            <Featured mainData={mainData} youtubePath={"_m9lzh0vgQE"} />
            <ContentListBox>
                <TopContent />
                {contentData &&
                    contentData.map(
                        (series, index) =>
                            series && (
                                <ContentList
                                    series={series}
                                    key={`${series.category}-${index}`}
                                />
                            )
                    )}
            </ContentListBox>
        </div>
    );
}

export default Main;
