import {
  Alert,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../contexAPI/stateProvider";
import { LoginFailure, LoginStart, LoginSuccess } from "../contexAPI/action";
import http from "../httpCommon";
import { setToken } from "../tokenHelper";
import { message } from "antd";
import startLogo from "../images/star.png";
// import backImg from "../images/cameraCat.jpg";
import img1 from "../images/smallBackImg3.jpeg";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function Login() {
  // use state and function part
  const [inputs, setInputs] = useState({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { dispatch } = useContext(Context);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // do time out function
  const doTimeOut = () => {
    return setTimeout(() => {
      setError(null);
    }, 2000);
  };

  // handle login function
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(LoginStart());
    if (inputs.identifier === "" || inputs.password === "") {
      setError("please you have to fill the form");
      doTimeOut();
    } else {
      try {
        const res = await http.post("/auth/local", inputs);
        console.log(inputs);

        dispatch(LoginSuccess(res.data.user));
        setToken(res.data.jwt);
        console.log(res);

        message.success(
          `Dear ${res.data.user.username}, Welcome to start light company website`
        );

        navigate("/");
      } catch (error) {
        setError("Invalid identifier or password");
        dispatch(LoginFailure());
        doTimeOut();
      }
    }
  };

  console.log(inputs);

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{
          marginTop: 12,
          // backgroundColor: "ButtonHighlight",
          borderRadius: "10px",
          padding: "20px",
          width: "500px",
          boxShadow: " -3px 1px 57px 0px rgba(0,0,0,0.41)",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={startLogo}
            alt=""
            width="300px"
            height="200px"
            // style={{ border: "1px solid black" }}
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              variant="filled"
              id="identifier"
              label="identifier"
              name="identifier"
              autoComplete="identifier"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              variant="filled"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            {error && <Alert severity="error">{error}</Alert>}
            <Grid container>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;
