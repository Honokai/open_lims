import React from "react";
import { AppBar, ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTema } from "../../contexts/useTheme";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NoStyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Navbar = () => {

  const { handleTheme } = useTema()

  const [ aberto, setAberto ] = React.useState<boolean>(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  function handleMenu()
  {
    setAberto(!aberto)
  }

  return (
    
      <AppBar position="fixed">
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            ref={anchorRef}
            onClick={handleMenu}
          >
            <MenuIcon/>
          </IconButton>
          <Popper
            open={aberto}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleMenu}>
                    <MenuList
                      autoFocusItem={aberto}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                    >
                      <MenuItem disableGutters>
                        <NoStyleLink style={{width: "100%", padding: "0 1rem"}} onClick={handleMenu} to={"/sample/create"}>
                          Sample
                        </NoStyleLink>
                      </MenuItem>
                      <MenuItem disableGutters onClick={handleMenu}>
                        <NoStyleLink style={{width: "100%", padding: "0 1rem"}} onClick={handleMenu} to={"/login"}>
                          SubSample
                        </NoStyleLink>
                      </MenuItem>
                      <MenuItem disableGutters onClick={handleMenu}>
                        <NoStyleLink style={{width: "100%", padding: "0 1rem"}} onClick={handleMenu} to={"/login"}>
                        Users
                        </NoStyleLink>
                      </MenuItem>
                      <MenuItem disableGutters onClick={handleMenu}>
                      <NoStyleLink style={{width: "100%", padding: "0 1rem"}} onClick={handleMenu} to={"/login"}>
                      Tests
                        </NoStyleLink>
                      </MenuItem>
                      <MenuItem disableGutters>
                        <NoStyleLink style={{width: "100%", padding: "0 1rem"}} onClick={handleMenu} to={"/login"}>
                          Login
                        </NoStyleLink>
                      </MenuItem>
                      <MenuItem onClick={() => {
                        handleMenu()
                        handleTheme()
                      }}>
                        Tema
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NoStyleLink to={"/"}>
              {process.env.REACT_APP_NAME}
            </NoStyleLink>
          </Typography>
        </Toolbar>
      </AppBar>
    
  )
}

export default Navbar