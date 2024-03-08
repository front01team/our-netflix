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

function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "REMOVE":
            return state - 1;
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, 0);

    return <RouterProvider router={router} />;
}

export default App;
