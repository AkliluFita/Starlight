import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Stack } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Product({ product }) {
  const MyCard = styled(Card)(({ theme }) => ({
    position: "relative",
    width: "300px",
    height: "250px",
    alignItems: "flex-end",
    overflow: "hidden",
    "&:hover": {
      boxShadow: " 0px 3px 13px 0px rgba(145,121,121,0.75)",
    },
  }));

  const MyContentBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: "15px 25px",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    background: "rgba(0.5, 0.5, 0.5, 0.582)",
    color: "white",
    opacity: "0.6",
    transform: "translateY(80%)",
    transition: "all 0.35s ease",
    height: "100%",
    "&:hover": {
      transform: "translateY(0)",
      background: "rgba(0, 0, 0, 0.582)",
      opacity: "1",
    },
  }));

  const MyCardMedia = styled(CardMedia)(({ theme }) => ({
    "&:hover": {
      transform: "scale(0.8)",
      transition: "0.5s",
    },
  }));

  const MyProStatus = styled(Typography)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    background: "#BFE3E6",
    p: 2,
    width: "75px",
    height: "25px",
    color: "blue",
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Georgia",
  }));

  const MyProTitle = styled(Typography)(({ theme }) => ({
    background: "white",
    opacity: ".4",
    color: "blue",
    textAlign: "center",
    padding: "5px",
    borderRadius: "5px",
    fontFamily: "Georgia",
  }));

  const PRO_PATH = product?.attributes;
  const IMG_PATH = product?.attributes?.img?.data?.attributes?.url;

  const MyCardContent = styled(CardContent)(({ theme }) => ({}));
  return (
    <MyCard sx={{ borderRadius: "10px" }}>
      <MyProStatus>{PRO_PATH.status}</MyProStatus>

      <MyCardMedia
        component="img"
        alt="product"
        image={process.env.REACT_APP_MEDIA_URL + IMG_PATH}
      />
      <MyContentBox>
        <Stack
          direction="row"
          gap={5}
          sx={{
            alignItems: "center",
            color: "white",
          }}
        >
          <ArrowUpwardIcon />
          <Typography variant="h5">ETB: {PRO_PATH.price}</Typography>
        </Stack>
        <MyCardContent>
          <MyProTitle gutterBottom variant="h5">
            {PRO_PATH.title}
          </MyProTitle>
        </MyCardContent>
        <CardActions>
          <Link to={`/Product/${product?.id}`}>
            <Button
              size="large"
              sx={{
                color: "black",
                border: "1px solid white",
                marginLeft: "80px",
                background: "white",
                opacity: ".4",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <SearchIcon />
            </Button>
          </Link>
        </CardActions>
      </MyContentBox>
    </MyCard>
  );
}

export default Product;
