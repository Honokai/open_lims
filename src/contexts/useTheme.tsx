import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";

interface ContextProps {
  theme: "light"|"dark"
  handleTheme: () => void
}

interface ProviderProps {
  children: React.ReactNode
}

export const ThemeContext = React.createContext<ContextProps>({} as ContextProps)

export const ThemeContextProvider = ({children}: ProviderProps) => {
  const [ theme, setTheme ] = React.useState<"light"|"dark">(localStorage.getItem("preferredTheme") !== null && localStorage.getItem("preferredTheme") !== "light" ? "dark" : "light");
  
  React.useEffect(() => {
    localStorage.setItem("preferredTheme", theme);
  }, [theme])
  

  function handleTheme()
  {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeContext.Provider
      value={{handleTheme, theme}}
    >
      <ThemeProvider theme={Tema[theme]}>
        { children }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const Tema = {
  light: createTheme({
      palette: {
        mode: 'light',
        secondary: {
          main: '#135FD4',
        }
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(',')
      }
  }),
  dark: createTheme({
      palette: {
        mode: 'dark',
        secondary: {
          main: '#898989',
        },
        background: {
          default: '#222'
        },
      },
      typography: {
        fontFamily: [
          '"Roboto Slab Light"',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(',')
      }
  }),
}

export function useTema() {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context
}