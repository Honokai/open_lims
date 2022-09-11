import React from "react";
import Navbar from "./Navbar";
import { Tema, useTema } from "../../contexts/useTheme";
import { Box } from "@mui/system";
import { ScopedCssBaseline, ThemeProvider } from "@mui/material"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <ScopedCssBaseline enableColorScheme>
      <Navbar/>
      <Box height="100vh" sx={{paddingTop: "4rem", overflow: "auto"}}>
        {props.children}
      </Box>
    </ScopedCssBaseline>
  )
}

export default Layout