import { Box, Typography } from "@mui/material";
import React from "react";

function SignInRequestPg() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          background: "#BFE3E6",
          p: 12,
          borderRadius: "10px",
          fontFamily: "Georgia",
        }}
      >
        {" "}
        please Dear customer you have to login first to access your cart list
        items
      </Typography>
    </Box>
  );
}

export default SignInRequestPg;
