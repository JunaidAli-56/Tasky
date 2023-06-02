import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/Footer"
import Home from './Home';
import ProjectDes from "./ProjectDescription/ProjectDes";

export default function Index() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route index path="/home" element={<Home />} />
                    <Route path="project-description/:id" element={<ProjectDes />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}
