import { ThemeProvider } from "@emotion/react";
import { createTheme, Theme } from "@mui/material";
import React from "react";

interface ContextProps {
  handleTheme: () => void
}

interface ProviderProps {
  children: React.ReactNode
}

const ThemeContext = React.createContext<ContextProps>({} as ContextProps)

export const ThemeContextProvider = ({children}: ProviderProps) => {
  React.useEffect(() => {
    console.log("ss")
  }, [])

  const [ theme, setTheme ] = React.useState<"light"|"dark">(localStorage.getItem("preferredTheme") as "light"|"dark" ?? "light");

  function handleTheme()
  {
    theme == "light" ? setTheme("dark") : setTheme("light");
    
    localStorage.setItem("preferredTheme", theme);
  }

  return (
    <ThemeContext.Provider
      value={{handleTheme}}
    >
      <ThemeProvider theme={Tema[theme]}>
        { children }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

const Tema = {
  light: createTheme({
      palette: {
        mode: 'light',
        secondary: {
          main: '#135FD4',
        }
      },
  }),
  dark: createTheme({
      palette: {
        mode: 'dark',
        background: {
          default: '#222'
        }
      },
  })
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  return context
}