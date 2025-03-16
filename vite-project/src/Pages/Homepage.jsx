import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Unity from "../assets/Unity.webp";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url(${Unity})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        px: 3,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Box with Animation */}
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>

      <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              mb: 2,
              fontWeight: 500,
              opacity: 0.9,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            <h1>WELCOME To Communion!</h1>
          </Typography>
        </motion.div>

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3.5rem" },
              mb: 2,
              fontFamily: '"Times New Roman", sans-serif',
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)", // Subtle Glow
            }}
          >
            Connecting People Across Faiths & Interests
          </Typography>
        </motion.div>

        {/* Description Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              mb: 4,
              opacity: 0.9,
              fontFamily: '"Times New Roman", sans-serif',
            }}
          >
            Join us to be part of a community where spirituality meets innovation. Together, we'll build a world that's more inclusive, engaging, and connected than ever before!
          </Typography>
        </motion.div>

        {/* Button with Hover & Bounce Animation */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "black",
              fontWeight: "bold",
              fontSize: "1.2rem",
              px: 4,
              py: 1.5,
              borderRadius: "25px",
              transition: "0.3s",
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.8)", // Soft glow effect
              "&:hover": {
                backgroundColor: "#FFC107",
                transform: "scale(1.05)",
              },
            }}
            onClick={() => navigate("/events")}
          >
            Explore Events
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
