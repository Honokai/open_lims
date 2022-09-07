import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Tema, ThemeContext, ThemeContextProvider, useTema } from "../../contexts/useTheme";
import { Box } from "@mui/system";
import { ScopedCssBaseline, ThemeProvider } from "@mui/material"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { theme } = useTema()

  return (
    <ThemeProvider theme={Tema[theme]}>
      <ScopedCssBaseline enableColorScheme>
        <Navbar/>
        <Box height="100vh" sx={{paddingTop: "4rem", overflow: "auto"}}>
          {props.children}
        </Box>
      </ScopedCssBaseline>
      </ThemeProvider>
    // </ThemeContextProvider>
  )
}

export default Layout