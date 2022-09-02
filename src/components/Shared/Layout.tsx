import React from "react";
import Navbar from "./Navbar";
import { ThemeContextProvider } from "../../contexts/Theme";
import { Box } from "@mui/system";
import { Container, ScopedCssBaseline } from "@mui/material"

interface LayoutProps {
    children?: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <ThemeContextProvider>
      <ScopedCssBaseline enableColorScheme>
        <Navbar/>
        <Box height="100vh" sx={{paddingTop: "4rem"}}>
          {props.children}
        </Box>
      </ScopedCssBaseline>
    </ThemeContextProvider>
  )
}

export default Layout