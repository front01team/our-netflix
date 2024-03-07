import React from "react";
import Featured from "../components/MainPage/Featured";
import ContentList from "../components/MainPage/ContentList";
import TopContent from "../components/MainPage/TopContent";

function Main() {
  return (
    <div style={{ backgroundColor: "black", overflow: "hidden" }}>
      <Featured />
      <TopContent />
      <ContentList />
      <ContentList />
      <ContentList />
    </div>
  );
}

export default Main;
