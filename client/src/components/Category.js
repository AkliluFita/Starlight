import {
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

function Category({ product }) {
  const MyCardMedia = styled(CardMedia)(({ theme }) => ({
    height: "350px",
  }));

  const PRO_PATH = product?.attributes;
  const IMG_PATH = product?.attributes?.img?.data?.attributes?.url;

  return (
    <Card
      sx={{
        maxWidth: 475,
        position: "relative",
        // boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      }}
    >
      <CardContent
        sx={{
          width: "100%",
          position: "absolute",
          background: "#BFE3E6",
          // zIndex: "999",
          opacity: 0.8,
          "&:hover": { opacity: 1 },
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: "Georgia",
            color: "blue",
          }}
        >
          {PRO_PATH.title}
        </Typography>
        <Typography
          variant="h11"
          sx={{ position: "absolute", bottom: 0, right: 0 }}
        >
          click here to see this single category product list
        </Typography>
      </CardContent>
      <MyCardMedia
        sx={{
          height: "500px",
          "&:hover": {
            transform: "scale(1.1)",
            transition: ".5s",
          },
        }}
        component="img"
        alt="green iguana"
        image={process.env.REACT_APP_MEDIA_URL + IMG_PATH}
      />
    </Card>
  );
}

export default Category;
