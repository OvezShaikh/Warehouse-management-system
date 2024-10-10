import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box, Typography, useMediaQuery } from "@mui/material";

export default function BestSelledProductChartBar() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    setChannelData([
      {
        data: [3400, 3500, 3000, 4000, 4699],
      },
    ]);

    return () => {
      setChannelData([]);
    };
  }, []);

  const options3 = {
    colors: ["#5A4FCF", "#FFA500", "#C53500", "#FFBF00", "#FF3659"],
    chart: {
      toolbar: {
        show: true,
      },
      id: "basic-bar",
      type: "bar",
      stacked: true, //one on top of another
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: isSmallScreen ? "bottom" : "top",
      horizontalAlign: "left",
      offsetY: -3,
    },
    // title: {
    //   text: "Top 5 Selled Product Over Year",
      
    // },
    plotOptions: {
      bar: {
        distributed: true,
        barHeight: "40%",
        horizontal: true,
      },
    },

    xaxis: {
      categories: [
        "product 1",
        "product 2",
        "product 3",
        "product 4",
        "product 5",
      ],
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 60,
        offsetX: 90,
      },
    },
  };
  return (
    <Box
      sx={{
        marginX: 4,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "95%",
      }}
    >
      {/* Wrapper for Title and Toolbar */}
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2.5 }}>
        <Typography variant="h2" fontWeight="semi-bold"  sx={{fontSize: '1rem',marginBottom: 0, // Remove or reduce margin
            padding: 0, // Remove padding if necessary
            whiteSpace: 'normal',
            width: '60%', }}>
          Top 5 Selled Product Over Year
        </Typography>
        
        {/* Toolbar with margin */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
          {options3.chart.toolbar && options3.chart.toolbar.tools && (
            <>
            </>
          )}
        </Box>
      </Box>

      {/* Chart Component */}
      <ApexCharts
        options={options3}
        series={channelData}
        type="bar"
        width="100%"
        height="320"
      />
    </Box>
  );
}
