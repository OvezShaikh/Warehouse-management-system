import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import { Box, Button } from "@mui/material"; // Import MUI components for styling

const Example = () => {
  return (
    <Box sx={{ display: "grid", placeContent: "center", bgcolor: "#171717", p: 5, m: 5 }}>
      <FloatingPhone />
    </Box>
  );
};

const FloatingPhone = () => {
  return (
    <Box
      sx={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
        bgcolor: "#8b5cf6", // Equivalent to Tailwind's bg-violet-500
        borderRadius: "24px",
      }}
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          height: "24rem", // h-96 in Tailwind
          width: "14rem", // w-56 in Tailwind
          borderRadius: "24px",
          borderWidth: "2px",
          borderBottomWidth: "4px",
          borderRightWidth: "4px",
          borderColor: "#ffffff",
          backgroundColor: "#0f0f0f", // bg-neutral-900
          padding: "8px",
          position: "relative",
        }}
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </Box>
  );
};

const HeaderBar = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "10px",
          width: "64px",
          height: "8px",
          bgcolor: "#171717", // bg-neutral-900
          borderRadius: "4px",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      />
      <Box sx={{ position: "absolute", right: "12px", top: "10px", display: "flex", gap: "8px", zIndex: 10 }}>
        <FiWifi style={{ color: "#52525b" }} />
        <FiBatteryCharging style={{ color: "#52525b" }} />
      </Box>
    </>
  );
};

const Screen = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        height: "100%",
        width: "100%",
        bgcolor: "#ffffff", // bg-white
        borderRadius: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Example logo from logoispum */}
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "#8b5cf6" }} // fill-violet-500
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        />
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        />
      </svg>

      <Link to="/home" style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: "32px",
          left: "16px",
          right: "16px",
          bgcolor: "#ffffff",
          color: "#8b5cf6",
          textTransform: "none",
          borderRadius: "8px",
          zIndex: 10
        }}
      >
        Get Started
      </Button>
      </Link>

      <Box
        sx={{
          position: "absolute",
          bottom: "-18rem", // Adjust bottom position for the circle
          left: "50%",
          width: "24rem", // w-96
          height: "24rem",
          borderRadius: "50%",
          bgcolor: "#8b5cf6", // bg-violet-500
          transform: "translateX(-50%)",
        }}
      />
    </Box>
  );
};

export default Example;
