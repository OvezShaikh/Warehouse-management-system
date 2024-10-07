import { Grid, Box, Typography, useMediaQuery, Drawer, IconButton, AppBar, Toolbar } from "@mui/material";
import React, { useState } from "react";
import Products from "./Products";
import Overview from "./Overview";
import SideBarComponent from "../../SideBarComponent";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Inventory = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box>
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

        <Grid item md={isSmallScreen ? 12 : 10} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <Grid item md={9} xs={12}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
                boxShadow: 3, // Add shadow for separation
              }}
            >
              <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
                Inventory
              </Typography>
              <Products />
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 5,
                padding: 3,
                height: "100%",
                boxShadow: 3, // Add shadow for separation
              }}
            >
              <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
                Overview
              </Typography>
              <Overview />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Inventory;
