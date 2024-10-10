import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box, Typography, useMediaQuery } from "@mui/material";

export default function BestSelledProductChart() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    setChannelData([
      { name: "product 1", data: [14, 25, 20, 20, 30, 99] },
      { name: "product 2", data: [99, 94, 21, 70, 10, 54] },
      { name: "product 3", data: [41, 53, 41, 66, 20, 12] },
      { name: "product 4", data: [59, 51, 12, 5, 40, 27] },
      { name: "product 5", data: [67, 62, 69, 35, 86, 69] },
    ]);
  }, []);

  const options3 = {
    chart: {
      id: "basic-bar",
      type: "bar",
      toolbar: {
        show: true,
        tools: {
          pan: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: isSmallScreen ? "bottom" : "top",
      horizontalAlign: "left",
      offsetY: -3,
    },
    title: {
      text: "", // Set to empty since we're using a custom title
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    markers: {
      size: 4,
      strokeWidth: 0,
      hover: {
        size: 7,
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: ["Mon", "Thu", "Wed", "Tue", "Fri", "Sat", "Sun"],
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topRight",
        offsetY: 60,
        offsetX: 90,
      },
    },
  };

  return (
    <Box
      sx={{
        marginX: 2,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "95%",
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* Title and Toolbar in One Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2.5, // Adjusted for spacing
          }}
        >
          <Typography variant="h2" fontWeight="semi-bold" sx={{
            fontSize: '1rem', // Adjust font size
            marginBottom: 0, // Remove or reduce margin
            padding: 0, // Remove padding if necessary
            whiteSpace: 'normal',
            width: '50%', // Prevent wrapping if you want it to stay in one line
          }}>Top 5 Selled Products Last Week</Typography>
          {/* Toolbar */}
          {(isMediumScreen || isSmallScreen) && (
            <Box sx={{ display: 'flex', alignItems: 'end' }}>
              <span dangerouslySetInnerHTML={{ __html: options3.chart.toolbar.tools.download }} />
              <span style={{ marginLeft: 10 }} dangerouslySetInnerHTML={{ __html: options3.chart.toolbar.tools.zoom }} />
            </Box>
          )}
        </Box>

        <ApexCharts
          options={options3}
          series={channelData}
          type="line" // Corrected to "bar" to match your data
          width="100%"
          height="330"
        />
      </Box>
    </Box>
  );
}
