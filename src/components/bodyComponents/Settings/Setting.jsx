import React from "react";
import { Box, Grid, Typography, TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function SettingsPage() {
  return (
    <>
      <Box sx={{ bgcolor: "#DEE3E9", padding: 6, margin: 4 }}>
        <Grid container spacing={0}>
          {/* <Grid item md={2} sm={0}>
            <SideBarComponent />
          </Grid> */}
          <Grid item md={10} sm={12}>
            <Box sx={{ padding: 3, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h4" gutterBottom>
                Settings
              </Typography>

              {/* Profile Information Section */}
              <Typography variant="h6" gutterBottom>
                Profile Information
              </Typography>
              <TextField
                fullWidth
                required
                label="Full Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                sx={{ mb: 2 }}
              />

              {/* Password Change Section */}
              <Typography variant="h6" gutterBottom>
                Change Password
              </Typography>
              <TextField
                fullWidth
                label="Current Password"
                type="password"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="New Password"
                type="password"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Confirm New Password"
                type="password"
                variant="outlined"
                sx={{ mb: 2 }}
              />

              {/* Notification Preferences Section */}
              <Typography variant="h6" gutterBottom>
                Notification Preferences
              </Typography>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Email Notifications"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="SMS Notifications"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Push Notifications"
              />

              {/* Save Button */}
              <Box sx={{ mt: 3 }}>
                <Button variant="contained" color="primary">
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
