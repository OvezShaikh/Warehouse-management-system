import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { Fade } from '@mui/material'; // For animations
import images from "../constants/images";

export default function RootPage() {
  return (
    <Container sx={{ bgcolor: "#f0f4f8", py: 10 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
          Welcome to the Warehouse Management System
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, color: "gray" }}>
          Explore our interactive warehouse model and discover our features!
        </Typography>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4}>
        {[
          {
            title: "Real-Time Inventory Tracking",
            description: "Monitor stock levels and manage your inventory efficiently. Never run out of stock again!",
            image: images.RealTimeInventoryTracking,
          },
          {
            title: "Order Management",
            description: "Streamline your order process from placement to fulfillment. Track orders easily!",
            image: images.OrderManagement,
          },
          {
            title: "Supplier Management",
            description: "Manage your suppliers effectively and maintain good relationships to ensure timely deliveries.",
            image: images.SupplierManagement,
          },
        ].map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Fade in timeout={500}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 3,
                  bgcolor: 'white',
                  borderRadius: 2,
                  boxShadow: 3,
                  height: '100%',
                  transition: 'transform 0.1s',
                  '&:hover': {
                    transform: 'scale(1.15)',
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="h5" sx={{ mb: 2 }}>{feature.title}</Typography>
                <img src={feature.image} alt={feature.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}/>
                <Typography>{feature.description}</Typography>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action Section */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Get Started Today!</Typography>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" size="large">
            Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
