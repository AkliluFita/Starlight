import { Box, Stack } from "@mui/material";
import React from "react";
// import Announcement from "../components/Announcement";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SignInRequestPg from "../components/SignInRequestPg";
import { Context } from "../contexAPI/stateProvider";

function CartPg() {
  const { user } = React.useContext(Context);
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {/* <Announcement /> */}
        <Navbar />
        {user ? <Cart /> : <SignInRequestPg />}
        <Footer />
      </Stack>
    </Box>
  );
}

export default CartPg;
