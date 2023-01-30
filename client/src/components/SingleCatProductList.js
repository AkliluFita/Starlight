import {
  Box,
  InputBase,
  Stack,
  styled,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../fetchAPI/products";
import SingleCatProduct from "./SingleCatProduct";
import SearchIcon from "@mui/icons-material/Search";
import { doFilter } from "../method/titleFilter";
// import { Button } from "antd";
// import SingleCatProductFilter from "./SingleCatProductFilter";
import noProductFoundImg from "../images/noProductImg.svg";
import { cartList } from "../dommyData/cartData";
import { Collapse } from "antd";

function SingleCatProductList() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItem: "center",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #b7ced9",
    backgroundColor: "#f4f3f9",
    // boxShadow: "12px 9px 5px -5px rgba(110,91,91,0.75) ",

    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "22ch",
        // "&:focus": {
        //   width: "40ch",
        // },
      },
    },
  }));
  const location = useLocation();
  const carId = location.pathname.split("/")[2];
  console.log(carId);

  // single Cat Products fetch
  const { products } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${carId}`
  );

  const updatedCat = cartList.map((cart) => {
    return cart.cat + "o";
  });

  // setUpdateCart(...updateCart);

  console.log(updatedCat);
  // console.log(updateCart);

  console.log();

  // find Cat name
  const findCatName = () => {
    return products.map((product) => {
      return product?.attributes.categories.data[0].attributes.title;
    });
  };

  // find Cat Desc
  const findCatDesc = () => {
    return products.map((product) => {
      return product?.attributes.categories.data[0].attributes.desc;
    });
  };

  const catName = findCatName()[0];
  const catDesc = findCatDesc()[0];

  //multi states for search title, proType, sortPrice % checkBox
  const [proTitle, setProTitle] = useState("");
  const [proTypes, setProTypes] = useState("All");

  // search method(filter)
  function search(items) {
    if (proTitle) {
      return items.filter((item) => item.attributes.title.includes(proTitle));
    }
    return items;
  }

  console.log(products);

  // handle change for product types
  const handleChange = (event) => {
    setProTypes(event.target.value);
  };

  //  use state for filter product types
  const [filteredProTypes, setFilteredProTypes] = useState(products);
  useEffect(() => {
    const handleProTypeFilter = () => {
      doFilter(proTypes, setFilteredProTypes, products);
    };
    handleProTypeFilter();
  }, [proTypes, products]);

  // collapse config
  const { Panel } = Collapse;

  const onChange = (key) => {
    console.log(key);
  };

  const listStyle = { fontFamily: "Georgia", color: "blue", fontSize: "16px" };

  return (
    <Box
      sx={{
        // border: "1px solid red",
        padding: "20px",
        // height: "200px",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          fontFamily: "Georgia",
          color: "blue",
          marginTop: "180px",
        }}
      >
        Our {catName} Lists
      </Typography>

      <Stack
        direction="row"
        spacing={4}
        sx={{
          // border: "1px solid black",
          justifyContent: "space-around",
          maxWidth: "65%",
          padding: "10px",
          background: "#f1f2ed",
          flexWrap: "wrap",
          gap: "10px",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search With Product name..."
            onChange={(e) => setProTitle(e.target.value)}
            value={proTitle}
            autoFocus
          />
        </Search>

        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel id="demo-simple-select-label">Model Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={proTypes}
            label="proTypes"
            onChange={handleChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="IP">IP</MenuItem>
            <MenuItem value="Laptop">Laptop</MenuItem>
            <MenuItem value="HDCVI">HDCVI</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Desktop">Desktop</MenuItem>
            <MenuItem value="OtherProduct">OtherProduct</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Stack direction="row" sx={{ marginTop: "30px" }}>
        {/*<Stack
          sx={{
            padding: "10px",
            border: "1px solid red",
            alignItems: "center",
          }}
        >
          {/* filter pro type with checkbox */}
        {/* <SingleCatProductFilter
            newProducts={newProducts}
            setNewProducts={setNewProducts}
            products={products}
          /> 
        </Stack>*/}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          gap={2}
          sx={{
            backgroundColor: "#f1f2ed",
            padding: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            flex: 2,
          }}
        >
          {search(filteredProTypes).length >= 1 ? (
            search(filteredProTypes).map((product) => {
              return <SingleCatProduct key={product.id} product={product} />;
            })
          ) : (
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Georgia",
                  color: "blue",
                  textAlign: "center",
                }}
              >
                Sorry we don't have product for this model type or name
              </Typography>
              <img
                src={noProductFoundImg}
                alt="no product found img"
                width="500px"
              />
            </Stack>
          )}
        </Stack>
        <Stack
          sx={{
            flex: 1,
            p: 3,
            borderLeft: "1px solid blue",
            borderBottom: "1px solid blue",
          }}
          direction="column"
        >
          <Typography
            variant="h5"
            sx={{
              p: 2,
              fontFamily: "Georgia",
              color: "blue",
            }}
          >
            {catName}
          </Typography>
          <Typography
            sx={{ marginTop: "20px", fontFamily: "Georgia", color: "blue" }}
          >
            {catDesc}
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Georgia",
                color: "blue",
                background: "#f1f2ed",
                borderTop: "1px solid blue",
                p: 2,
              }}
            >
              Products Lists
            </Typography>
            <Box sx={{ marginTop: "20px" }}>
              <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                <Panel header="PRODUCT CATEGORIES" key="1">
                  <ul style={{ padding: "10px" }}>
                    <li style={listStyle}>
                      Security , Surveillance Camera and its Accessories
                    </li>
                    <li style={listStyle}>Computers and Servers</li>
                    <li style={listStyle}>
                      Computer Accessories and other related products
                    </li>
                  </ul>
                </Panel>
                <Panel header="SECURITY TYPES" key="2">
                  <ul style={{ padding: "10px" }}>
                    <li style={listStyle}>Dome, PTZ, Bullet, Thermal Camera</li>
                    <li style={listStyle}>Access Control</li>
                    <li style={listStyle}>Fire Detection Alarms</li>
                    <li style={listStyle}>Video Intercom</li>
                  </ul>
                </Panel>
                <Panel header="COMPUTER TYPES" key="3">
                  <ul style={{ padding: "10px" }}>
                    <li style={listStyle}>HP, DELL, Mac, Asus & Acer Laptop</li>
                    <li style={listStyle}>HP, DELL $ Mac, Desktops</li>
                    <li style={listStyle}>HP, DELL Servers</li>
                  </ul>
                </Panel>
              </Collapse>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SingleCatProductList;
