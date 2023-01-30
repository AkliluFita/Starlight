import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { proList } from "../dommyData/proData";
import useFetch from "../fetchAPI/products";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../images/whiteBg3.jpg";

function ProductList() {
  const location = useLocation();
  const carId = location.pathname.split("/")[2];
  console.log(carId);
  const { products, loading, error } = useFetch(`http://191.96.57.4/api/products?populate=*`);

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
        // height: "60vh",
        // border: "1px solid red",
        padding: "20px",
        // backgroundColor: "#E1E9E8",
        display: "flex",
        flexDirection: "column",
        // alignItems: "end",
        textAlign: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <Stack
        sx={{
          display:"flex",
          alignItems:'center',
          backgroundColor: "#E1E9E8",
          backgroundImage: `url(${img1})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            marginTop: "30px",
            // border: "1px solid white",
            textAlign: "center",
            fontFamily: "Georgia",
            color: "blue",
          }}
          data-aos="zoom-in"
        >
          Our Product List
        </Typography>

        <Typography
          variant="body1"
          sx={{
            background: "#faf5f8",
            marginLeft: "1200px",
            width: "600px",
            p: 2,
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            textAlign: "end",
            fontFamily: "Georgia",
            color: "blue",
          }}
          data-aos="fade-left"
        >
          When it comes to securing your business, there are many different
          types of CCTV to choose from. Surveillance plays a huge part in
          today’s society, and with cameras all around us, our day-to-day lives
          are experiencing higher levels of security each day. What many people
          don’t know, however, in our company variety of different types of
          security cameras which suit different situations or premises, and that
          selecting the proper camera for the right the application really is
          vital.
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        gap={2}
        sx={{
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          border: "1px solid #BFE3E6",
          overflowY: "scroll",
          height: "700px",
          // backgroundColor: "#E1E9E8",
          backgroundColor: "#E1E9E8",
        }}
      >
        {error ? (
          <Typography sx={{ color: "red" }}>something is error</Typography>
        ) : loading ? (
          <Typography>loading....</Typography>
        ) : (
          products.map((product) => {
            return (
              <Product key={product.id} product={product} loading={loading} />
            );
          })
        )}
      </Stack>
    </Box>
  );
}

export default ProductList;
