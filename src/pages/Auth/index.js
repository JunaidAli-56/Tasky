import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login'
export default function index() {
    return <>
        <Routes>
            <Route path='/'>
            <Route index path="login" element={<Login />} />
            </Route>
        </Routes>
    </>;
}
