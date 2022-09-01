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
        <Box height={"100vh"}>
          <Container sx={{padding: "2rem 0", height: "inherit"}}>
            <Navbar/>
            {props.children}
          </Container>
        </Box>
      </ScopedCssBaseline>
    </ThemeContextProvider>
  )
}

export default Layout