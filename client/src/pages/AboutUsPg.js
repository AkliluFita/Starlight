import { Box, Stack } from "@mui/material";
import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutUsPg() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Navbar />
        <AboutUs />
        <Footer />
      </Stack>
    </Box>
  );
}

export default AboutUsPg;
