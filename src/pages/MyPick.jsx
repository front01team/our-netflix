import React, { useEffect, useState } from "react";
import Content from "../components/MainPage/Content";
import styled from "styled-components";
import PickContent from "../components/PickContent";

const MyPickListSytle = styled.div`
    margin: 8rem;
`;
const WrapPickList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
`;

function MyPick() {
    const [myPickData, setMyPickData] = useState([]);

    useEffect(() => {
        fetch("/data/dataset.json")
            .then((response) => response.json())
            .then((data) => setMyPickData(data[0].all_data));
    }, []);

    myPickData && console.log(myPickData);

    return (
        <MyPickListSytle>
            <WrapPickList>
                {myPickData.map((pickData, index) => (
                    // <Content key={`pick-${index}`} pickData={pickData} />
                    <img key={`pick-${index}`} src={pickData.poster} />
                ))}
                {/* {pickData && (
                    <PickContent
                        key={`pick-${index}`}
                        pickData={pickData}
                        index={index}
                    />
                )} */}
            </WrapPickList>
        </MyPickListSytle>
    );
}

export default MyPick;
