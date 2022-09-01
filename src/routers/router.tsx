import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "../components/shared/Layout";

const Router = () => {
  <BrowserRouter>
    <Route path="/" element={<Layout/>}/>
    <Route path="/torpedo" element={<Layout/>}/>
  </BrowserRouter>
}