// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsRouter from "./components-router.jsx";
import Navbar from "../basics/navbar/Navbar.jsx";

function RouterInitter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dev/*" element={<ComponentsRouter />} />
                <Route path="/navbar" element={<Navbar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterInitter;
