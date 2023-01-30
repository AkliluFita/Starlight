import React from "react";
import Navbar from "../components/Navbar";
// import HeaderSlide from "../components/HeaderSlide";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import CategoryList from "../components/CategoryList";
import NewsLitter from "../components/ContactUs";
import HeaderSlideA from "../components/HeaderSlideA";
import NewMovePro from "../components/NewMovePro";
// import Announcement from "../components/Announcement";
// import { AuthContext } from "../context/authContext";

function Home() {
  // const { currentUser } = useContext(AuthContext);
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={5} sx={{ alignItems: "center" }}>
        <Navbar />
        <HeaderSlideA />
        <NewMovePro />
        <CategoryList />
        <ProductList />
        <Footer />
      </Stack>
    </Box>
  );
}

export default Home;
