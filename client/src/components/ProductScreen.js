import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
// import img1 from "../images/desktop.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useParams } from "react-router-dom";
import useFetch from "../fetchAPI/products";
import { Context } from "../contexAPI/stateProvider";
// import { ADD_TO_CART } from "../contexAPI/constant";
import { AddCart } from "../contexAPI/action";
import { Image, Tooltip } from "antd";

function ProductScreen() {
  const [quantity, setQuantity] = useState(1);

  const [selectImg, setSelectImg] = useState("img");
  console.log(selectImg);

  const proId = useParams().id;
  console.log(proId);
  const { products } = useFetch(`/products/${proId}?populate=*`);
  console.log(products?.attributes);

  const PRO_PATH = products?.attributes;

  const IMG_PATH = products?.attributes?.img?.data?.attributes?.url;
  const IMG_PATH_1 = products?.attributes?.imgOne?.data?.attributes?.url;
  const IMG_PATH_2 = products?.attributes?.imgTwo?.data?.attributes?.url;
  const IMG_PATH_SELECT =
    products?.attributes?.[selectImg]?.data?.attributes?.url;

  // generate unique id for cart
  const uniqueId = (length = 16) => {
    return parseInt(
      Math.ceil(Math.random() * Date.now())
        .toPrecision(length)
        .toString()
        .replace(".", "")
    );
  };

  const uId = uniqueId();

  const { dispatch } = useContext(Context);

  // check added cart
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  //methods
  const handleAddCart = () => {
    const newCart = {
      id: products.id + uId,
      title: PRO_PATH.title,
      img: process.env.REACT_APP_MEDIA_URL + IMG_PATH,
      isNew: PRO_PATH.isNew,
      des: PRO_PATH.desc,
      status: PRO_PATH.status,
      quantity: quantity,
      price: PRO_PATH.price,
    };
    try {
      dispatch(AddCart(newCart)); // distrust to protect the iteration problem
      setIsAddedToCart(true);
    } catch (error) {}
    // console.log(state);
  };

  //text style
  const textStyle = {
    fontFamily: "Georgia",
    color: "blue",
    border: "1px solid #BFE3E6",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <Box sx={{ minHeight: "600px", p: 4 }}>
      <Stack
        direction="row"
        gap={4}
        sx={{ p: 7, flexWrap: "wrap", marginTop: "150px" }}
      >
        <Box
          sx={{
            height: "90%",
            display: "flex",
            flexDirection: "row",
            flex: 8,
            flexWrap: "wrap",

            // border: "1px solid #24CCD8",
          }}
        >
          <Stack direction="column" sx={{ flex: 4, flexWrap: "wrap" }} gap={2}>
            <Tooltip
              placement="right"
              title={"click here to see the  product on the big screen"}
              color="blue"
            >
              <img
                src={process.env.REACT_APP_MEDIA_URL + IMG_PATH}
                alt=""
                style={{
                  flex: 8,
                  height: "100px",
                  width: "150px",
                  border: "1px solid #24CCD8",
                  cursor: "pointer",
                  // boxShadow: "-2px 2px 8px 0px rgba(0,0,0,0.75)",
                }}
                onClick={() => setSelectImg("img")}
              />
            </Tooltip>
            <Tooltip
              placement="right"
              title={"click here to see the big product on the big screen"}
              color="blue"
            >
              <img
                src={process.env.REACT_APP_MEDIA_URL + IMG_PATH_1}
                alt=""
                style={{
                  flex: 8,
                  height: "100px",
                  width: "150px",
                  border: "1px solid #24CCD8",
                  cursor: "pointer",
                  // boxShadow: "-2px 2px 8px 0px rgba(0,0,0,0.75)",
                }}
                onClick={() => setSelectImg("imgOne")}
              />
            </Tooltip>
            <Tooltip
              placement="right"
              title={"click here to see the  product on the big screen"}
              color="blue"
            >
              <img
                src={process.env.REACT_APP_MEDIA_URL + IMG_PATH_2}
                alt=""
                style={{
                  flex: 8,
                  height: "100px",
                  width: "150px",
                  padding: "10px",
                  border: "1px solid #24CCD8",
                  cursor: "pointer",
                  // boxShadow: "-2px 2px 8px 0px rgba(0,0,0,0.75)",
                }}
                onClick={() => setSelectImg("imgTwo")}
              />
            </Tooltip>
          </Stack>
          <Image
            src={process.env.REACT_APP_MEDIA_URL + IMG_PATH_SELECT}
            alt=""
            style={{
              flex: 8,
              height: "500px",
              width: "500px",
              // boxShadow: "-2px 2px 8px 0px rgba(0,0,0,0.75)",
            }}
          />
        </Box>
        <Stack direction="column" gap={4} sx={{ flex: 4, p: 4 }}>
          <Typography variant="h3" sx={textStyle}>
            {PRO_PATH?.title}
          </Typography>
          <Typography variant="h5" sx={textStyle}>
            {PRO_PATH?.desc}
          </Typography>
          <Typography variant="h6" sx={textStyle}>
            ETB: {PRO_PATH?.price}
          </Typography>
          <Stack direction="row" gap={4} sx={{ alignItems: "center" }}>
            <IconButton onClick={() => setQuantity((prev) => prev + 1)}>
              <Tooltip
                placement="bottom"
                title={`add item quantity`}
                color="blue"
                style={{ color: "black" }}
              >
                <AddCircleIcon sx={{ fontSize: 50 }} />
              </Tooltip>
            </IconButton>
            <Typography variant="h4" sx={textStyle}>
              {quantity}
            </Typography>
            <IconButton
              onClick={() => quantity >= 2 && setQuantity((prev) => prev - 1)}
            >
              <Tooltip
                placement="bottom"
                title={`minus item quantity`}
                color="blue"
                style={{ color: "black" }}
              >
                <RemoveCircleIcon sx={{ fontSize: 50 }} />
              </Tooltip>
            </IconButton>
            <Box sx={{ border: "1px solid #BFE3E6", p: 1 }}>
              {isAddedToCart ? (
                <Tooltip
                  placement="bottom"
                  title={`pls,you have already selected this item, could you check other products`}
                  color="red"
                  style={{ color: "black" }}
                >
                  <Button sx={{ color: "#c1cad9", cursor: "not-allowed" }}>
                    ADDED TO CART
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip
                  placement="bottom"
                  title={"add this product to your items cart"}
                  color="blue"
                >
                  <Button onClick={handleAddCart}>ADD TO CART</Button>
                </Tooltip>
              )}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ProductScreen;
