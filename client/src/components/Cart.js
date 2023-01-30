import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
import React, { useContext, useState } from "react";
import {
  createOrder,
  // getAllOrder,
  RemoveAllCarts,
  RemoveCart,
} from "../contexAPI/action";
import { Context } from "../contexAPI/stateProvider";
// import img1 from "../images/desktop.jpg";
// import img2 from "../images/printer.jpeg";
// import { cartList } from "../dommyData/cartData";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip, message } from "antd";
// import httpCommon from "../httpCommon";
import httpOrder from "../httpOrder";
import { useNavigate } from "react-router-dom";
import emptyCartImg from "../images/emptyCart.webp";
import { Modal } from "antd";
import OrderDetail from "./OrderDetail";

function Cart() {
  const { cart, dispatch, user } = useContext(Context);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  // modal config
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  //find total price
  const findTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const totalPrice = findTotal();

  // handle delete
  const handleDeleteItem = (id) => {
    dispatch(RemoveCart(id));
  };

  // do time out function
  const doTimeOut = () => {
    return setTimeout(() => {
      setError(null);
      setSuccess(null);
    }, 2000);
  };

  // handle order and submit to the database
  const handleCreateOrder = async () => {
    const newOrder = {
      userId: user.id,
      email: user.email,
      userName: user.username,
      products: cart.map((item) => ({
        productId: item.id,
        productDesc: item.desc,
        productImg: item.img,
        productTitle: item.title,
        productQuantity: item.quantity,
        productStatus: item.status,
        productPrice: item.price,
      })),
      totalAmount: totalPrice,
    };
    try {
      const res = await httpOrder.post("/orders", { data: newOrder });
      dispatch(createOrder(res.data));
      setSuccess("well, you have submitted your items order successfully");
      doTimeOut();
      dispatch(RemoveAllCarts());

      message.success(
        `Dear ${user.username} you have done successfully, now enjoy our other products!`
      );
      setOpen(true);
    } catch (error) {
      setError(error?.response.data.error.message ?? "Something went wrong!");
      doTimeOut();
      console.log(error);
    }
  };

  const textStyle = {
    fontFamily: "Georgia",
    color: "blue",
  };

  const handleOk = () => {
    setOpen(false);
    navigate("/");
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",

        p: 3,
        // border: "1px solid red",
      }}
    >
      <Stack
        spacing={2}
        direction="column"
        sx={{ height: "100%", marginTop: "200px" }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontFamily: "Georgia", color: "blue" }}
        >
          YOUR CART ITEM LISTS
        </Typography>
        <Stack spacing={2} direction="row" gap={3} sx={{ flexWrap: "wrap" }}>
          {cart.length >= 1 ? (
            <Stack
              direction="column"
              sx={{
                flex: 1,
                p: 3,
                // height: "120px",
                width: "100%",
                flexWrap: "wrap",
              }}
              gap={3}
              key={cart.id}
            >
              {cart.map((item) => (
                <Stack
                  direction="row"
                  sx={{
                    flex: 2,

                    borderRadius: "10px",
                    background: "white",

                    // boxShadow:
                    //   "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                  }}
                  gap={4}
                  key={item.id}
                >
                  <img
                    width={100}
                    src={item.img}
                    alt=""
                    style={{
                      flex: 1,
                      height: "200px",
                      width: "100px",
                    }}
                  />
                  <Stack sx={{ flex: 1, p: 2 }} gap={3}>
                    <Typography sx={textStyle}>
                      Name: <strong>{item.title}</strong>
                    </Typography>
                    <Typography sx={textStyle}>
                      Status: <strong> {item.status}</strong>
                    </Typography>
                    <Typography sx={textStyle}>
                      Quantity: <strong>{item.quantity}</strong>
                    </Typography>
                    <Typography sx={textStyle}>
                      Price:<strong> ETB {item.price}</strong>
                    </Typography>
                  </Stack>

                  <Tooltip
                    placement="bottom"
                    title={"delete item from cart"}
                    color="red"
                    style={{ color: "black" }}
                  >
                    <IconButton
                      sx={{ height: "100px" }}
                      color="error"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              ))}
            </Stack>
          ) : (
            <Box
              sx={{
                flex: 1,
                background: "#f1f2ed",
                flexDirection: "column",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "blue",
                  fontFamily: "Georgia",
                }}
              >
                sorry, you don't have any item in the cart
              </Typography>
              <img
                src={emptyCartImg}
                alt="no product found img"
                width="500px"
              />
            </Box>
          )}

          {cart.length >= 1 ? (
            <Box sx={{ flex: 1, p: 3 }}>
              <Stack
                gap={5}
                sx={{
                  flex: 1,
                  // border: "1px solid #BFE3E6",
                  // border: "1px solid black",
                  height: "400px",
                  width: "400px",
                  // marginLeft: "150px",
                  flexDirection: "column",
                  background: "white",
                  p: 2,
                  // boxShadow:
                  //   "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              >
                <Typography sx={textStyle}>ORDER SUMMERY</Typography>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography sx={textStyle}>SUBTOTAL</Typography>
                  <Typography sx={textStyle}>ETB {totalPrice} + 20</Typography>
                </Stack>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography sx={textStyle}>DISCOUNT</Typography>
                  <Typography sx={textStyle}>ETB 20 </Typography>
                </Stack>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography sx={textStyle}>TOTAL</Typography>
                  <Typography sx={textStyle}>ETB {totalPrice}</Typography>
                </Stack>

                {cart.length >= 1 ? (
                  <Button
                    sx={{
                      border: "1px solid #BFE3E6",
                    }}
                    onClick={handleCreateOrder}
                  >
                    SUBMIT YOUR ITEMS IN OUR ORDER LIST
                  </Button>
                ) : (
                  <Tooltip
                    placement="bottom"
                    title={
                      "please, you should have at least one item in cart for your order products"
                    }
                    color="red"
                    style={{ color: "black" }}
                  >
                    <Button
                      sx={{
                        border: "1px solid #BFE3E6",
                        color: "#c1cad9",
                        cursor: "not-allowed",
                      }}
                    >
                      SUBMITTED YOUR ITEMS IN OUR ORDER LIST
                    </Button>
                  </Tooltip>
                )}
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}
              </Stack>
            </Box>
          ) : (
            <Typography></Typography>
          )}
        </Stack>

        <Stack>
          <Modal
            title="Thank You for your shopping with us, Look at your Submitted Detail Order Lists"
            open={open}
            onOk={handleOk}
            onCancel={hideModal}
            okText="Direct me to the home page to shope new products"
            cancelText="Stay To this Page"
            width={1000}
          >
            <OrderDetail />
          </Modal>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Cart;
