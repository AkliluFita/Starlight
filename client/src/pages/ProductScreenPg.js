import { Box, Stack } from "@mui/material";
import React from "react";
// import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductScreen from "../components/ProductScreen";

function ProductScreenPg() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {/* <Announcement /> */}
        <Navbar />
        <ProductScreen />
        <Footer />
      </Stack>
    </Box>
  );
}

export default ProductScreenPg;
