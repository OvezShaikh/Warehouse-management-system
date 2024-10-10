import React, { useState } from "react";
import { Box, Grid, AppBar, Toolbar, IconButton, Drawer, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import RevenueCard from "../revenue/RevenueCard";
import VisitorsGrowthCharts from "./VisitorsGrowthCharts";
import ProductsGrowthCharts from "./ProductsGrowthCharts";
import CustomersGrowthCharts from "./CustomersGrowthCharts";
import SalesGrowthCharts from "./SalesGrowthCharts";
import SideBarComponent from "../../SideBarComponent";

const Growth = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const revenuCards = [
    {
      isMoney: false,
      number: "330",
      percentage: 11,
      upOrDown: "down",
      color: "red",
      title: "Orders Per Month",
      subTitle: "vs prev month",
    },
    {
      isMoney: false,
      number: "109",
      percentage: 35,
      upOrDown: "up",
      color: "green",
      title: "Total Customer",
      subTitle: "vs prev year",
    },
    {
      isMoney: false,
      number: "607",
      percentage: 10,
      upOrDown: "up",
      color: "green",
      title: "Total Product",
      subTitle: "vs prev month",
    },
    {
      isMoney: false,
      number: "1200",
      percentage: "30",
      title: "Total Visitors",
      color: "green",
      subTitle: "vs prev week",
    },
  ];

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

      <Grid container sx={{ p: 3 }}>
        {!isSmallScreen && (
          <Grid item lg={2} md={3} sx={{ flexShrink: 0 }}>
            <SideBarComponent />
          </Grid>
        )}

        <Grid item xs={12} md={9} lg={10} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {/* Revenue Cards Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                // margin: 3,
                // bgcolor: "white",
                // borderRadius: 2,
                // padding: 3,
                // boxShadow: 3,
              }}
            >
              <Grid container spacing={1}>
                {revenuCards.map((card, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box m={2}>
                      <RevenueCard card={card} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Growth Charts Section */}
          <Grid item xs={12} sm={12} md={6} sx={{ mb: 3 }}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
                Sales Growth
              </Typography>
              <SalesGrowthCharts />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} sx={{ mb: 3 }}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
                Visitors Growth
              </Typography>
              <VisitorsGrowthCharts />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} sx={{ mb: 3 }}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
                Products Growth
              </Typography>
              <ProductsGrowthCharts />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} sx={{ mb: 3 }}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" sx={{marginLeft:"12px", fontWeight: "bold" }}>
                Customers Growth
              </Typography>
              <CustomersGrowthCharts />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Growth;
