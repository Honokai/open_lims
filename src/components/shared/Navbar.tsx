import React from "react";
import { AppBar, ClickAwayListener, Grow, IconButton, List, ListItem, ListSubheader, MenuItem, MenuList, Paper, Popper, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "../../contexts/Theme";

const Navbar = () => {

  const { handleTheme } = useTheme()

  const [ aberto, setAberto ] = React.useState<boolean>(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  function handleMenu()
  {
    setAberto(!aberto)
  }

  return (
    <AppBar>
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
                    <MenuItem onClick={() => {
                      handleMenu()
                      handleTheme()
                    }}>Tema</MenuItem>
                    <MenuItem onClick={handleMenu}>Sample</MenuItem>
                    <MenuItem onClick={handleMenu}>SubSample</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Meu Teste
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar