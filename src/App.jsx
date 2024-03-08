import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { useState, useEffect, useReducer } from "react";
import MyPick from "./pages/MyPick";
import Error from "./pages/Error";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Main /> },
            { path: "/mypick", element: <MyPick /> },
            { path: "/watch/:id", element: <Watch /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
