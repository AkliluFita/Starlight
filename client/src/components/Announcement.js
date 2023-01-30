import { Box, IconButton, Stack, styled, Typography } from "@mui/material";

import React from "react";
import EdgesensorLowIcon from "@mui/icons-material/EdgesensorLow";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import img1 from "../images/smallBackImg4.jpg";

function Announcement() {
  const MyMainBox = styled(Box)(({ theme }) => ({
    height: "auto",
    width: "100%",

    p: 1,
    backgroundColor: "blue",
    // position: "sticky",
    top: 0,
    // borderRadius: "10px",
    backgroundImage: `url(${img1})`,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    zIndex: 999,
    [theme.breakpoints.down("md")]: {
      height: "auto",
      // display: "none",
    },
  }));

  const MyMainStack = styled(Stack)(({ theme }) => ({
    minHeight: "70px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    // border: "1px solid black",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      // justifyContent: "spa" ,
      // gap: "6px",
    },
  }));

  const iconStyle = { color: "" };
  return (
    <MyMainBox>
      <MyMainStack>
        <Typography sx={{ color: "white" }}>
          get a super quality and nice price products from our company
        </Typography>
        <Stack sx={{ flex: 4 }} direction={{ xs: "column", sm: "row" }} gap={2}>
          <IconButton>
            <EdgesensorLowIcon sx={iconStyle} />:{" "}
            <Typography sx={{ color: "white" }}>+251911116963</Typography>
          </IconButton>
          <IconButton>
            <LocalPhoneIcon sx={iconStyle} />:{" "}
            <Typography sx={{ color: "white" }}>+251115585446</Typography>
          </IconButton>
          <IconButton>
            <MailIcon sx={iconStyle} />:{" "}
            <Typography sx={{ color: "white" }}>
              info@starlightimports.com
            </Typography>
          </IconButton>
        </Stack>
        <Stack sx={{ flex: 1 }} direction="row">
          <IconButton>
            <FacebookIcon sx={iconStyle} />
          </IconButton>

          <IconButton>
            <TwitterIcon sx={iconStyle} />
          </IconButton>

          <IconButton>
            <InstagramIcon sx={iconStyle} />
          </IconButton>

          <IconButton>
            <TelegramIcon sx={iconStyle} />
          </IconButton>
        </Stack>
      </MyMainStack>
    </MyMainBox>
  );
}

export default Announcement;
