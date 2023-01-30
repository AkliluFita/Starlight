import { Box, Stack } from "@mui/material";
import React from "react";
// import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Order() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {/* <Announcement /> */}
        <Navbar />
        order
        <Footer />
      </Stack>
    </Box>
  );
}

export default Order;
