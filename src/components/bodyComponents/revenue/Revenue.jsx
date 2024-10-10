import React, { useState } from "react";
import RevenueCard from "./RevenueCard";
import SideBarComponent from "../../SideBarComponent";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, AppBar, Toolbar, IconButton, Drawer, Grid, useMediaQuery } from "@mui/material";
import RevenueCostChart from "./RevenueCostChart";
import BestSelledProductChart from "./BestSelledProductChart";
import BestSelledProductChartBar from "./BestSelledProductChartBar";

const Revenue = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const revenuCards = [
    {
      isMoney: true,
      number: "23 000",
      percentage: 55,
      upOrDown: "up",
      color: "green",
      title: "Total Sales This Year",
      subTitle: "vs prev year",
    },
    {
      isMoney: true,
      number: "3500",
      percentage: 70,
      upOrDown: "up",
      color: "green",
      title: "Revenue This Year",
      subTitle: "vs prev year",
    },
    {
      isMoney: true,
      number: "2000",
      percentage: 12,
      upOrDown: "down",
      color: "red",
      title: "Cost This Year",
      subTitle: "vs prev year",
    },
    {
      isMoney: true,
      number: "98 000",
      percentage: undefined,
      title: "Revenue Total",
      subTitle: "vs prev year",
    },
  ];

  return (
    <Box sx={{ p: 3, }}>
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
        <Grid item xs={isSmallScreen ? 12 : 10}> {/* Adjust width based on screen size */}
          <Grid container sx={{ mx: 3 }}>
            {revenuCards.map((card, index) => (
              <Grid item md={3} key={index}>
                <Box m={5}>
                  <RevenueCard card={card} />
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid container sx={{ mx: 3 }}>
            <Grid item xs={12} md={12}>
              <RevenueCostChart />
            </Grid>
          </Grid>
          <Grid container sx={{ mx: 5 }}>
            <Grid item xs={12} md={7}>
              <BestSelledProductChart />
            </Grid>
            <Grid item xs={12} md={5} 
            // sx={{ mx: -1 }}
            >
              <BestSelledProductChartBar />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Revenue;
