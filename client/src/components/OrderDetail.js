import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
// import { Typography } from "antd";
import React, { useContext } from "react";
import { Context } from "../contexAPI/stateProvider";
// import { CSVLink } from "react-csv";
import startLogo from "../images/newStart1.png";
import PrintIcon from "@mui/icons-material/Print";
import { Tooltip } from "antd";

function OrderDetail() {
  const { orders } = useContext(Context);

  const textStyle = {
    fontFamily: "Georgia",
    color: "blue",
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Tooltip
          placement="right"
          title={"click here to print"}
          color="#108ee9"
          style={{ color: "black" }}
        >
          <Button variant="outlined" onClick={() => window.print()}>
            <PrintIcon />
          </Button>
        </Tooltip>

        <img src={startLogo} alt="" width="120px" />
      </Box>
      {/* <CSVLink data={orders}> DownLoad </CSVLink>; */}
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontFamily: "Georgia",
            color: "blue",
          }}
        >
          User Detail
        </Typography>
        <Box
          sx={{
            p: 2,
            display: "flex",
            // flexDirection: "column",
            gap: "10px",
            background: "#f2e6e6",
            justifyContent: "space-around",
            // width: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              background: "#f2e6e6",
              justifyContent: "space-around",
            }}
          >
            <Typography sx={textStyle}>
              User ID:
              <strong>{orders.data.attributes.userId}</strong>
            </Typography>
            <Typography sx={textStyle}>
              User Name:
              <strong>{orders.data.attributes.userName}</strong>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              background: "#f2e6e6",
              justifyContent: "space-around",
            }}
          >
            <Typography sx={textStyle}>
              User Email: <strong>{orders.data.attributes.email}</strong>
            </Typography>

            <Typography sx={textStyle}>
              Order Date: <strong>{orders.data.attributes.createdAt}</strong>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "blue",
            fontFamily: "Georgia",
          }}
        >
          Products Detail
        </Typography>
        <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    background: "#f2e6e6",
                    color: "blue",
                    fontFamily: "Georgia",
                  },
                }}
              >
                <TableCell>Product ID</TableCell>
                <TableCell align="right">Product Title</TableCell>
                <TableCell align="right">Product Image</TableCell>
                <TableCell align="right">Product Status</TableCell>
                <TableCell align="right">Product Quantity</TableCell>
                <TableCell align="right">Product Price(ETB)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.data.attributes.products.map((product) => (
                <TableRow
                  key={product.productId}

                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={textStyle}>{product.productId}</TableCell>
                  <TableCell align="right" sx={textStyle}>
                    {product.productTitle}
                  </TableCell>
                  <TableCell align="right">
                    <img
                      src={product.productImg}
                      alt="product img"
                      width="45px"
                      style={{
                        cursor: "pointer",
                        "&:hover": {
                          cur: "70px",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell align="right" sx={textStyle}>
                    {product.productStatus}
                  </TableCell>
                  <TableCell align="right" sx={textStyle}>
                    {product.productQuantity}
                  </TableCell>
                  <TableCell align="right" sx={textStyle}>
                    {new Intl.NumberFormat().format(product.productPrice)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-around",
            color: "blue",
            fontFamily: "Georgia",
          }}
        >
          <Typography sx={textStyle}>Total Amount</Typography>
          <Typography sx={{ background: "#f2e6e6", p: 2 }}>
            ETB:
            {new Intl.NumberFormat().format(orders.data.attributes.totalAmount)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderDetail;
