import React, { useState } from "react";
import SideBarComponent from "../../SideBarComponent";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import OrderList from "./OrderList";
import { Box, AppBar, Toolbar, IconButton, Drawer, Grid, useMediaQuery } from "@mui/material";

const Order = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box sx={{ m: 0, p: 3, width: "100%" }}>
      {isSmallScreen && (
        <AppBar position="fixed">
          <Toolbar sx={{ height: '80px' }}>
            <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
          <SideBarComponent />
        </Box>
      </Drawer>

      <Grid container sx={{ mx: 3, p: 3 }}>
        {!isSmallScreen && (
          <Grid item md={2} sx={{ flexShrink: 0 }}>
            <SideBarComponent />
          </Grid>
        )}
        <Grid item xs={12} md={10}>
          <OrderList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Order;
