import { Box, Stack } from "@mui/material";
import React from "react";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ContactUsPg() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Navbar />
        <ContactUs />
        <Footer />
      </Stack>
    </Box>
  );
}

export default ContactUsPg;
