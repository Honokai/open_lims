import React from "react";
import { AppBar, ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "../../contexts/Theme";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NoStyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Navbar = () => {

  const { handleTheme } = useTheme()

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
                      <MenuItem onClick={handleMenu}>
                        <NoStyleLink to={"/sample/create"}>
                          Sample
                        </NoStyleLink>
                      </MenuItem>
                      <MenuItem onClick={handleMenu}>SubSample</MenuItem>
                      <MenuItem onClick={handleMenu}>Users</MenuItem>
                      <MenuItem onClick={handleMenu}>Tests</MenuItem>
                      <MenuItem onClick={() => {
                        handleMenu()
                        handleTheme()
                      }}>Tema</MenuItem>
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