import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Home from "../components/Home";
import Page404 from "../components/Page404";
import SampleCreate from "../components/Sample/Create";
import Layout from "../components/Shared/Layout";
import { ThemeContextProvider } from "../contexts/useTheme";

const Router = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sample/:nome" element={<Layout/>}/>
          <Route path="/sample/create" element={<SampleCreate/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default Router