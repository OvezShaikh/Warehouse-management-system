import React from "react";
import NavBarComponent from "./NavBarComponent";
import { Box, Grid } from "@mui/material";
import SideBarComponent from "./SideBarComponent";
import { Outlet } from "react-router-dom";

export default function RootComponent() {
  return (
    <>
      <NavBarComponent />
      <Box
        sx={
          {
            // width: '100%',
            // bgcolor: "#DEE3E9",
            // height: 899,
          }
        }
      >
        <Grid>
            {/* <Grid item md={2} sm={0}>
              <SideBarComponent />
            </Grid> */}
          <Grid item>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
