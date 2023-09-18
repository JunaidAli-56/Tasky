import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Frontend from "./Frontend";
import PrivateRoute from "../components/PrivateRoute";
import Auth from "./Auth";

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<PrivateRoute Component={Frontend} />} />
                {/* <Route path="/*" element={<Frontend/>} /> */}
                <Route path="/auth/*" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    );
}
