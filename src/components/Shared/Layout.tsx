import React from "react";
import Navbar from "./Navbar";
import { ThemeContextProvider } from "../../contexts/Theme";
import { Box } from "@mui/system";
import { Container, ScopedCssBaseline, Toolbar } from "@mui/material"

interface LayoutProps {
    children?: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <ThemeContextProvider>
      <ScopedCssBaseline enableColorScheme>
        <Box height="100vh">
          <Navbar/>
          <Container disableGutters={true} maxWidth={false}>
            {props.children}
          </Container>
        </Box>
      </ScopedCssBaseline>
    </ThemeContextProvider>
  )
}

export default Layout