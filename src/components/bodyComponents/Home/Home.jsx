import React, { useState } from "react";
import { Box, Grid, IconButton, Drawer, AppBar, Toolbar, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SideBarComponent from "../../SideBarComponent";

import UilReceipt from "@iconscout/react-unicons/icons/uil-receipt";
import UilBox from "@iconscout/react-unicons/icons/uil-box";
import UilTruck from "@iconscout/react-unicons/icons/uil-truck";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import InfoCard from "../../subComponents/InfoCard";
import TotalSales from "./TotalSales";
import SalesByCity from "./SalesByCity";
import Channels from "./Channels";
import TopSellingProduct from "./TopSellingProduct";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const cardComponent = [
    {
      icon: <UilBox size={60} color={"#F6F4EB"} />,
      title: "Picked",
      subTitle: "1256",
      mx: 3,
      my: 0,
    },
    {
      icon: <UilTruck size={60} color={"#F6F4EB"} />,
      title: "Shipped",
      subTitle: "12",
      mx: 5,
      my: 0,
    },
    {
      icon: <UilCheckCircle size={60} color={"#F6F4EB"} />,
      title: "Delivered",
      subTitle: "15",
      mx: 5,
      my: 0,
    },
    {
      icon: <UilReceipt size={60} color={"#F6F4EB"} />,
      title: "Invoice",
      subTitle: "07",
      mx: 3,
      my: 0,
    },
  ];

  return (
    <Box sx={{ display: 'flex', margin: 0, padding: 3, height: '100vh' }}>
      {/* AppBar for smaller screens */}
      {isSmallScreen && (
        <AppBar position="fixed">
          <Toolbar sx={{height: '80px'}}>
            <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer for the sidebar, only for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
          <SideBarComponent />
        </Box>
      </Drawer>

      {/* Static Sidebar for larger screens */}
      {!isSmallScreen && (
        <Grid item md={2} sm={2} xs={1} sx={{ flexShrink: 0 }}>
          <SideBarComponent />
        </Grid>
      )}

      {/* Main Content */}
      <Grid item md={10} sm={9} xs={12} sx={{ width: '100%' }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginX: 3,
            borderRadius: 2,
            padding: 0,
          }}
        >
          {cardComponent.map((card, index) => (
            <Grid item md={3} key={index}  sx={{ marginY: 3 }}>
              <InfoCard card={card} />
            </Grid>
          ))}
        </Grid>

        <Grid container sx={{ margin: 3 }}>
          <Grid item md={6} xs={12} sx={{ marginY: 3 }}>
            <TotalSales data={{}} />
          </Grid>
          <Grid item md={6} xs={12} sx={{ marginY: 3 }}>
            <SalesByCity data={{}} />
          </Grid>
        </Grid>

        <Grid container sx={{ margin: 3 }}>
          <Grid item md={6} xs={12}>
            <Channels />
          </Grid>
          <Grid item md={6} xs={12}>
            <TopSellingProduct />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
