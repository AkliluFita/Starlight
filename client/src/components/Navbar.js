import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Badge, Box, Stack, styled } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Context } from "../contexAPI/stateProvider";
import { LogOut } from "../contexAPI/action";
import { message, Tooltip } from "antd";
import { removeToken } from "../tokenHelper";
import startLogo from "../images/newStart1.png";
import Announcement from "./Announcement";
// import TelegramIcon from "@mui/icons-material/Telegram";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "animate.css";

export default function ButtonAppBar() {
  const MyToolbar = styled(Box)(({ theme }) => ({
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    // border: "1px solid black",
    [theme.breakpoints.down("md")]: {
      // flexDirection: "row",
    },
  }));

  const MyMainBarStack = styled(Stack)(({ theme }) => ({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "40px",

    // border: "1px solid black",
    [theme.breakpoints.down("md")]: {
      height: "100px",
    },
  }));

  const MyMainMenuStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    // border: "1px solid black",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const MyAccountMenuStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    // border: "1px solid black",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const MyMobileScreenStack = styled(Stack)(({ theme }) => ({
    display: "none",

    // border: "1px solid black",
    [theme.breakpoints.down("md")]: {
      // display: "block",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent:"center",
       border: "1px solid black",
    },
  }));

  // down menu for mobile screen
  const DownMenuStack = styled(Stack)(({ theme }) => ({
    zIndex: 999,
    width: "100%",
    height: "450px",
    background: "#f2e6e6",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    justifyContent: "space-between",
    alignItems: "center",
    alignContent:"center",
    padding: "5px",
    boxShadow: "-1px -1px 10px 3px rgba(219,190,190,0.75)",
    borderRadius: "5px",
    top: 0,
    right: 0,
    border: "1px solid black",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  // remove underline style
  const style = { textDecoration: "none" };
  // navbar style


  // states from context
  const { user, dispatch, cart } = React.useContext(Context);

  // handle log out
  const handleLogOut = () => {
    dispatch(LogOut()); //can nullify user and cart as well
    removeToken();
    message.warning(
      `Dear ${user.username}! you have logged out, but you don't have access to see the cart item`
    );
  };

  // responsive state
  const [openDownMenu, setOpenDownMenu] = React.useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        zIndex: 999,
      }}
    >
      <Box
       
        sx={{
          background: "#f2e6e6",
          color: "black",
          minHeight: "180px",
          position:"sticky",
          // border: "1px solid black",
          display:'flex',
          flexDirection:"column",
          alignItems:"center",
          alignContent:"center"
        }}
        // style={
        //   scrollDirection === "down" ? navBarStyles.active : navBarStyles.hidden
        // }
      >
        <MyToolbar>
          {/* Announcement imported */}
          <Announcement />
          {/* main navbar component */}
          <MyMainBarStack>
            <Stack direction="row" gap={2}>
              <Link to="/" style={style}>
                <img src={startLogo} alt="" width="200px" height="100%" />
              </Link>
            </Stack>
            {/* main menu component */}
            <MyMainMenuStack gap={4}>
              <Tooltip
                placement="bottom"
                title={
                  "click the home page to see our showcase and all listed products, and other features"
                }
                color="#108ee9"
                style={{ color: "black" }}
              >
                <Link to="/" style={style}>
                  <Button variant="outlined">HOME</Button>
                </Link>
              </Tooltip>

              <Tooltip
                placement="bottom"
                title={"sorry, our blog is not active at the moment"}
                color="#108ee9"
                style={{ color: "black" }}
              >
                <Link style={style}>
                  <Button variant="outlined">BLOG</Button>
                </Link>
              </Tooltip>

              <Tooltip
                placement="bottom"
                title={
                  "click to see our overall company background, vision,..."
                }
                color="#108ee9"
                style={{ color: "black" }}
              >
                <Link to="/AboutUs" style={style}>
                  <Button variant="outlined">ABOUT US</Button>
                </Link>
              </Tooltip>

              <Tooltip
                placement="bottom"
                title={"Click to Contact us, ask and get Latest Information"}
                color="#108ee9"
                style={{ color: "black" }}
              >
                <Link to="/ContactUs" style={style}>
                  <Button variant="outlined">Contact Us</Button>
                </Link>
              </Tooltip>
            </MyMainMenuStack>
            {/* account menu component */}
            <MyAccountMenuStack
              direction={{ xs: "column", md: "row" }}
              gap={2}
              // sx={{ border: "1px solid black" }}
            >
              <Link to="/Cart">
                <Tooltip
                  placement="bottom"
                  title={"cart item lists"}
                  color="#108ee9"
                  style={{ color: "black" }}
                >
                  <IconButton size="large" aria-label="show 4 new mails">
                    <Badge badgeContent={cart?.length} color="primary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Link>
              {!user && (
                <Tooltip
                  Tooltip
                  placement="bottom"
                  title={`Dear customer sign in to be our  member and get access your cart lists`}
                  color="#108ee9"
                  style={{ color: "black" }}
                >
                  <Link to="/Login" style={style}>
                    <Button variant="outlined" sx={{ textDecoration: "none" }}>
                      Login
                    </Button>
                  </Link>
                </Tooltip>
              )}
              {!user && (
                <Tooltip
                  placement="bottom"
                  title={`Dear customer sign up if you are not registered yet`}
                  color="#108ee9"
                  style={{ color: "black" }}
                >
                  <Link to="/SignUp" style={style}>
                    <Button variant="outlined">Sign up</Button>
                  </Link>
                </Tooltip>
              )}
              {user && (
                <Tooltip
                  placement="bottom"
                  title={`Dear: ${user.username} if you are logged out, you don't have an access to see your cart list items, and your previous cart item list will be removed`}
                  color="#108ee9"
                  style={{ color: "black" }}
                >
                  <Button variant="outlined" onClick={handleLogOut}>
                    Log Out
                  </Button>
                </Tooltip>
              )}
              <Avatar src="/broken-image.jpg" />
            </MyAccountMenuStack>
          </MyMainBarStack>

          {/* for mobile screen */}
          <MyMobileScreenStack>
            <IconButton onClick={() => setOpenDownMenu(true)}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </MyMobileScreenStack>
          {openDownMenu && (
            <Box>
              <DownMenuStack className="animate__animated animate__bounceInLeft">
                <IconButton
                  onClick={() => setOpenDownMenu(false)}
                  sx={{ position: "absolute", right: 0 }}
                >
                  <ClearIcon fontSize="large" />
                </IconButton>
                <Link to="/" style={style}>
                  <Button
                    // variant="outlined"
                    sx={{ width: "100%" }}
                  >
                    HOME
                  </Button>
                </Link>

                <Link style={style}>
                  <Button sx={{ width: "100%" }}>BLOG</Button>
                </Link>

                <Link to="/AboutUs" style={style}>
                  <Button sx={{ width: "100%" }}>ABOUT US</Button>
                </Link>

                <Link to="/ContactUs" style={style}>
                  <Button sx={{ width: "100%" }}>Contact Us</Button>
                </Link>
                <Link to="/Cart">
                  <Tooltip
                    placement="bottom"
                    title={"cart item lists"}
                    color="#108ee9"
                    style={{ color: "black" }}
                  >
                    <IconButton size="large" aria-label="show 4 new mails">
                      <Badge badgeContent={cart?.length} color="primary">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Link>
                {!user && (
                  <Link to="/Login" style={style}>
                    <Button sx={{ textDecoration: "none" }}>Login</Button>
                  </Link>
                )}
                {!user && (
                  <Link to="/SignUp" style={style}>
                    <Button>Sign up</Button>
                  </Link>
                )}
                {user && <Button onClick={handleLogOut}>Log Out</Button>}
                <Avatar src="/broken-image.jpg" />
              </DownMenuStack>
            </Box>
          )}
        </MyToolbar>
      </Box>
    </Box>
  );
}
