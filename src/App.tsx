import React from "react";
import "antd/dist/reset.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
