import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/shared/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/sample/:nome" element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router