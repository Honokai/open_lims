import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home";
import Page404 from "../components/Errors/Page404";
import SampleCreate from "../components/Sample/Create";
import Layout from "../components/Shared/Layout";
import { TableContextProvider } from "../contexts/useTable";
import { ThemeContextProvider } from "../contexts/useTheme";
import UserList from "../components/Users/UserList";
import UserList2 from "../components/Testing/UserList2";

const Router = () => {
  return (
    <ThemeContextProvider>
      <TableContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/sample/:nome" element={<Layout/>}/>
            <Route path="/sample/create" element={<SampleCreate/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/users2" element={<UserList2/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </BrowserRouter>
      </TableContextProvider>
    </ThemeContextProvider>
  )
}

export default Router