import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";

interface ContextProps {
  handleTheme: () => void
}

interface ProviderProps {
  children: React.ReactNode
}

const ThemeContext = React.createContext<ContextProps>({} as ContextProps)

export const ThemeContextProvider = ({children}: ProviderProps) => {
  const [ theme, setTheme ] = React.useState<"light"|"dark">(localStorage.getItem("preferredTheme") === null ? "dark" : "light");

  React.useEffect(() => {
    localStorage.setItem("preferredTheme", theme)
  }, [theme])

  function handleTheme()
  {
    theme === "light" ? setTheme("dark") : setTheme("light");
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