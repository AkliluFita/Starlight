import { Box, Stack, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { aboutData } from "../dommyData/aboutData";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  const MyMainStack = styled(Stack)(({ theme }) => ({
    minHeight: "300px",

    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",

    "&:nth-child(odd)": {
      flexDirection: "row-reverse",
    },
    "&:nth-child(even)": {
      flexDirection: "row",
    },
  }));

  // used for box animate with scroll
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  // text style
  const textStyle = { color: "blue", fontFamily: "Georgia" };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 13,
        p: 5,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          background: "white",
          color: "blue",
          fontFamily: "Georgia",
          marginTop: "150px",
        }}
      >
        Our Company General Profile
      </Typography>
      {aboutData.map((list) => {
        return (
          <MyMainStack>
            <Stack sx={{ flex: 1 }} data-aos="flip-left">
              {" "}
              <img src={list.image} alt="" width="100%" />
            </Stack>
            <Stack
              sx={{ flex: 1, background: "white", p: 4 }}
              data-aos="zoom-in-down"
            >
              <Typography variant="h4" sx={textStyle}>
                {list.title}
              </Typography>
              <Typography variant="h6" sx={textStyle}>
                {list.desc}
              </Typography>
            </Stack>
          </MyMainStack>
        );
      })}
    </Box>
  );
}

export default AboutUs;
