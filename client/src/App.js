import "./App.css";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { theme } from "./theme";
import Home from "./pages/Home";
import Cart from "./pages/CartPg";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Order from "./pages/Order";
import ProductScreenPg from "./pages/ProductScreenPg";
import Blog from "./pages/Blog";
import { Routes, Route } from "react-router-dom";
import SingleCategoryPg from "./pages/SingleCategoryPg";
import { useContext, useEffect } from "react";
import { Context } from "./contexAPI/stateProvider";
import AboutUsPg from "./pages/AboutUsPg";
import ContactUsPg from "./pages/ContactUsPg";
import httpCommon from "./httpCommon";

function App() {
  const { orders, cart, user, isLoading } = useContext(Context);
  console.log(cart);
  console.log(user);
  console.log(isLoading);
  console.log(orders);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
       
        const res = await httpCommon.get("/products");

       console.log(res);
      } catch (error) {
        console.log(error);

      }

    
    };

    fetchProducts();
  }, []);
  // console.log(res);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#faf5f8",
          // width: "100%",
          // overflowX: "scroll",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUsPg />} />
          <Route path="/Products/:id" element={<SingleCategoryPg />} />
          <Route path="/Product/:id" element={<ProductScreenPg />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUsPg />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
