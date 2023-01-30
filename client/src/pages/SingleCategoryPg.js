import { Box, Stack } from "@mui/material";
import React from "react";
// import Announcement from "../components/Announcement";

// import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import SingleCatProductList from "../components/SingleCatProductList";

function SingleCategoryPg() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {/* <Announcement /> */}
        <Navbar />
        {/* <Filter /> */}
        <SingleCatProductList />
        <Footer />
      </Stack>
    </Box>
  );
}

export default SingleCategoryPg;
