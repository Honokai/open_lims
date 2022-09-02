import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import SampleCreate from "../components/Sample/Create";
import Layout from "../components/Shared/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sample/:nome" element={<Layout/>}/>
        <Route path="/sample/create" element={<SampleCreate/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router