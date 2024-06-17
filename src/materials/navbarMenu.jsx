import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';


import { DisNavMenu, DisNavMenu2, MenuButton } from '../style';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around', paddingTop:'30px'}}>
        {<DisNavMenu><svg style={{transform:'rotate(90deg)'}} xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>Motor</DisNavMenu>}
        {<DisNavMenu><svg style={{transform:'rotate(90deg)'}} xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>Caravan</DisNavMenu>}
        {<DisNavMenu><svg style={{transform:'rotate(90deg)'}} xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>Tuning</DisNavMenu>}
        {<DisNavMenu><svg style={{transform:'rotate(90deg)'}} xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>Used Cars</DisNavMenu>}
        {<DisNavMenu2>Camping Place</DisNavMenu2>}
        {<DisNavMenu2>Sign in</DisNavMenu2>}
        {<DisNavMenu2>My Orders</DisNavMenu2>}
        {<DisNavMenu2>Log out</DisNavMenu2>}
        {<DisNavMenu2>Setting</DisNavMenu2>}
        {<DisNavMenu2>Motor</DisNavMenu2>}
        </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{position:'fixed', top:'30px', right:'40px'}}  onClick={toggleDrawer(anchor, true)}><MenuButton/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
