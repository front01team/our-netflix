import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    background-color: black;
    margin: 0;
    padding: 0;
    color: white;
  }
`;

export default function Home() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <GlobalStyle />
        </>
    );
}
