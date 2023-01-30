import { Box, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import startLogo from "../images/newStart1.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import mobileTransfer from "../images/mobile1.png";
import tellBirr from "../images/tellBirr1.png";
import visa from "../images/visa1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import img1 from "../images/smallBackImg4.jpg";

function Footer() {
  // remove underline style
  const style = { textDecoration: "none" };
  const textStyle = { fontSize: "14px", color: "black", fontWeight: "bold" };
  const iconStyle = { color: "black" };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        background: "#202124",
        backgroundImage: `url(${img1})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "start",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={2}
        sx={{
          // border: "red 1px solid",

          width: "100%",
          padding: "10px",
          justifyContent: "space-between",
          fontFamily: "Georgia",
          color: "white",
        }}
      >
        <Stack gap={3} sx={{ fontWeight: "bold" }}>
          <Link to="/" style={style}>
            <img
              src={startLogo}
              alt=""
              width="200px"
              height="100%"
              style={{ background: "white" }}
            />
          </Link>

          <Stack direction="row" gap={1}>
            <LocationOnIcon />:{" "}
            <Typography sx={textStyle}>
              Bole, Getu Commercial Building, 10 floor Bole, office nu: 1008,
              Addis Ababa,
            </Typography>
          </Stack>
          <Stack gap={2}>
            <Stack direction="row" gap={1}>
              <LocalPhoneIcon />: +251115585446 / +251115585445
            </Stack>
            <Typography sx={textStyle}>
              Working Hour: (8:00 PM - 17:00 PM)
            </Typography>
            <Typography sx={textStyle}>
              Working Day: (Monday - Saturday)
            </Typography>
          </Stack>
        </Stack>
        <Stack gap={3}>
          <Typography variant="h5" sx={{ color: "blue", fontWeight: "bold" }}>
            PRODUCT CATEGORIES
          </Typography>
          <Typography sx={textStyle}>
            Security , Surveillance Camera and its Accessories
          </Typography>

          <Typography sx={textStyle}>Computers and Servers</Typography>
          <Typography sx={textStyle}>
            Computer Accessories and other related products
          </Typography>
        </Stack>
        <Stack gap={3}>
          <Typography variant="h5" sx={{ color: "blue", fontWeight: "bold" }}>
            SECURITY TYPES
          </Typography>
          <Typography sx={textStyle}>
            Dome, PTZ, Bullet, Thermal Camera
          </Typography>

          <Typography sx={textStyle}>Access Control</Typography>
          <Typography sx={textStyle}>Fire Detection Alarms</Typography>
          <Typography sx={textStyle}>Video Intercom</Typography>
        </Stack>
        <Stack gap={3}>
          <Typography variant="h5" sx={{ color: "blue", fontWeight: "bold" }}>
            COMPUTER TYPES
          </Typography>

          <Typography sx={textStyle}>
            HP, DELL, Mac, Asus & Acer Laptop
          </Typography>

          <Typography sx={textStyle}>HP, DELL $ Mac, Desktops</Typography>
          <Typography sx={textStyle}>HP, DELL Servers</Typography>
        </Stack>
        <Stack gap={3}>
          <Typography variant="h5" sx={{ color: "blue", fontWeight: "bold" }}>
            PAYMENT METHOD
          </Typography>

          <Stack>
            <img src={mobileTransfer} alt="" width="100" />
          </Stack>

          <Stack>
            <img src={tellBirr} alt="" width="100" />
          </Stack>

          <Stack>
            <img src={visa} alt="" width="100" />
          </Stack>
        </Stack>
      </Stack>
      <hr sx={{ width: "800px" }} />
      <Stack
        direction="row"
        sx={{
          marginTop: "20px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Typography>
          {" "}
          {"Copyright © "}
          {new Date().getFullYear()} By StartLight Imports Company
        </Typography>
        <Stack direction="row">
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
        <Typography>Designed & Developed by Aklilu Jemal</Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
