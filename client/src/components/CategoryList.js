import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Category from "./Category";
// import { catList } from "../dommyData/catData";
import { Link } from "react-router-dom";
import useFetch from "../fetchAPI/products";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../images/whiteBg3.jpg";

function CategoryList() {
  const { products } = useFetch(`/categories?populate=*`);
  console.log(products);

  // used for box animate with scroll
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <Box
      sx={{
        minHeight: "90vh",
        boxSizing: " border-box",
        // border: "1px solid red",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "start",
        textAlign: "center",
        justifyContent: "center",
        gap: "30px",
        // backgroundColor: "#E1E9E8",
        marginTop: "200px",
        width: "100%",
      }}
    >
      <Stack
        sx={{
          // backgroundColor: "#E1E9E8",
          backgroundImage: `url(${img1})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            marginTop: "30px",
            width: "100%",
            fontFamily: "Georgia",
            color: "blue",
          }}
          data-aos="zoom-in"
        >
          Our Product Category
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            width: {sx:"auto", },
            p: 2,
            background: "#faf5f8",
            fontFamily: "Georgia",
            color: "blue",
          }}
          data-aos="fade-right"
        >
          We have super qualified Computer and server computers that are
          high-performance computer designed to handle, store, and manage
          network data, devices, and systems. Servers are the engines that drive
          businesses by supplying network devices and systems with adequate
          resources. Servers are essential for organizations since they provide
          scalability, efficiency, and business continuity capabilities. Servers
          can perform the same tasks that a standard desktop PC is capable of
          with some extras. On the other hand, desktop computers can execute
          server processes but at a far lower performance level.
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        gap={4}
        sx={{
          // border: "1px solid black",
          padding: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {products.map((product) => {
          return (
            <Link to={`/Products/${product.id}`} key={product.id}>
              <Category product={product} />
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
}

export default CategoryList;
