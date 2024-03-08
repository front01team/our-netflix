import styled, { css } from "styled-components";
import ReactDOM from "react-dom";
import EpisodeContent from "./EpisodeContent";
import RelatedContent from "./RelatedContent";
import useSearchVideo from "../../hooks/useSearchVideo";
import { IoIosClose } from "react-icons/io";

const modalWidth = {
    default: "80%",
    smallScreen: "90%",
};

const modalBackgroundColor = "#181818";
const modalTextColor = "#d2d2d2";

const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    height: 950px;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
`;

const DetailModal = styled.div`
    width: 70%;
    height: 100%;
    position: fixed;
    top: 1.5rem;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 12px;
    background-color: ${modalBackgroundColor};
    overflow: scroll;

    font-size: 14px;
    line-height: 24px;
    color: ${modalTextColor};

    max-width: ${modalWidth.default};
    @media screen and (max-width: 768px) {
        max-width: ${modalWidth.smallScreen};
    }

    z-index: 50;
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 50%;
    padding-bottom: 1rem;

    img,
    iframe {
        width: 100%;
        height: 100%;
        border-radius: 12px 12px 0 0;
        object-fit: cover;
    }

    div {
        width: 100%;
        background: linear-gradient(0deg, #181818, 50%);
        position: absolute;
        top: 0;
    }
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 3rem;
    gap: 2rem;
`;

const ModalInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    span:nth-child(1) {
        color: lightgreen;
    }
`;

const ModalInfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const ModalInfoRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ModalEpisodeBox = styled.div`
    font-size: 14px;
    line-height: 24px;
`;

const ModalRelatedBox = styled.div`
    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
`;

const CoverUp = styled.div`
    position: absolute;
    background-color: #181818;
    width: 100%;
    height: 1.5rem;
    z-index: 100;
    top: 0;
`;

const CoverBottom = styled.div`
    position: absolute;
    background-color: #181818;
    width: 100%;
    height: 1rem;
    z-index: 3;
    bottom: 100;
`;
const CoverLeft = styled.div`
    position: absolute;
    background-color: #181818;
    width: 100%;
    height: 1rem;
    z-index: 3;
`;
const CoverRight = styled.div`
    position: absolute;
    background-color: #181818;
    width: 100%;
    height: 1rem;
    z-index: 3;
`;

const CloseButton = styled(IoIosClose)`
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 3.2rem;
    color: white;
    z-index: 100;
    background-color: #141414;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: gray;
    }
    &:active {
        border: 2px solid white;
    }
`;

const ModalFooter = styled.div`
    padding: 0.5rem 3rem;
    margin-bottom: 3rem;
`;

const Backdrop = ({ setIsModalOpen }) => {
    return (
        <div>
            <ModalContainer
                onClick={() => setIsModalOpen(false)}
            ></ModalContainer>
        </div>
    );
};

const Overlay = ({ setIsModalOpen, allData }) => {
    const youtubePath = useSearchVideo(allData?.name);
    return (
        <DetailModal>
            <CloseButton onClick={() => setIsModalOpen(false)}></CloseButton>
            <ModalHeader>
                {youtubePath ? (
                    <>
                        {/* <CoverUp />
                        <CoverBottom />
                        <CoverLeft />
                        <CoverRight /> */}
                        <iframe
                            frameBorder="0"
                            src={`https://www.youtube.com/embed/${youtubePath}?controls=0&autoplay=1&loop=1&mute=1&playlist=${youtubePath}`}
                        ></iframe>
                    </>
                ) : (
                    <img src={allData?.poster} alt="poster" />
                )}
                <div></div>
            </ModalHeader>
            <ModalContent>
                <ModalInfoBox>
                    <ModalInfoLeft>
                        <div>
                            <span>98% 일치</span>
                            <span>{allData?.year}</span>
                            <span>{allData?.all_episode}</span>
                        </div>
                        <h2>오늘의 TOP 영상 5위</h2>
                        <div>{allData?.description}</div>
                    </ModalInfoLeft>
                    <ModalInfoRight>
                        {allData.length !== 0 &&
                            allData.movie_info.map((script, index) => (
                                <div key={`info-${index}`}>
                                    <span style={{ color: "gray" }}>
                                        {script.split(":")[0]}:
                                    </span>
                                    <span>{script.split(":")[1]}</span>
                                </div>
                            ))}
                    </ModalInfoRight>
                </ModalInfoBox>

                <ModalEpisodeBox>
                    <h2>회차</h2>
                    {allData.length !== 0 &&
                        allData.episode_detail.map((episode, index) => (
                            <EpisodeContent
                                key={`episode-${index}`}
                                episode={episode}
                                index={index}
                            />
                        ))}
                </ModalEpisodeBox>

                <ModalRelatedBox>
                    <h2>함께 시청된 콘텐츠</h2>
                    <div>
                        {allData.length !== 0 &&
                            allData.related_detail.map((related, index) => (
                                <RelatedContent
                                    key={`related-${index}`}
                                    related={related}
                                />
                            ))}
                    </div>
                </ModalRelatedBox>

                <ModalFooter>
                    <h1>${allData?.name} 상세 정보</h1>
                    {allData.length !== 0 &&
                        allData.movie_info.map((script, index) => (
                            <div key={`info-${index}`}>
                                <span style={{ color: "gray" }}>
                                    {script.split(":")[0]}:
                                </span>
                                <span>{script.split(":")[1]}</span>
                            </div>
                        ))}
                </ModalFooter>
            </ModalContent>
        </DetailModal>
    );
};

function Modal({ setIsModalOpen, allData }) {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop setIsModalOpen={setIsModalOpen} />,
                document.getElementById("backdrop")
            )}
            {ReactDOM.createPortal(
                <Overlay setIsModalOpen={setIsModalOpen} allData={allData} />,
                document.getElementById("overlay")
            )}
        </>
    );
}

export default Modal;
