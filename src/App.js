import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MyPick from "./pages/MyPick";
import Error from "./pages/Error";
import Main from "./pages/Main";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
      { path: "/mypick", element: <MyPick /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;