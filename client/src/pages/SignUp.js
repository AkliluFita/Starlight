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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import http from "../httpCommon";

import http from "../httpCommon";
import { setToken } from "../tokenHelper";
import { message } from "antd";
import startLogo from "../images/star.png";

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

function SignUp() {
  // ***************** function part ************* //
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState(false);
  const navigate = useNavigate();

  // handle change for input form
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // do time out function
  const doTimeOut = () => {
    return setTimeout(() => {
      setError(null);
    }, 2000);
  };

  console.log(inputs);

  // handle sing up fun
  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      inputs.username === "" ||
      inputs.password === "" ||
      inputs.email === ""
    ) {
      setError("please you have to fill the form");
      doTimeOut();
    } else {
      try {
        const res = await http.post("/auth/local/register", inputs);

        // set the token
        setToken(res.jwt);

        // set the user
        setInputs(res.user);

        message.success(
          `you have registered successfully: ${res.data.user.username}!`
        );

        navigate("/Login");
      } catch (error) {
        console.error(error);
        setError(error?.response.data.error.message ?? "Something went wrong!");
        doTimeOut();
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{
          marginTop: 12,
          backgroundColor: "ButtonHighlight",
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
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSignUp}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              variant="filled"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              variant="filled"
              name="email"
              label="email"
              type="email"
              id="email"
              autoComplete="current-email"
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
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            {err && <Alert severity="error">{err}</Alert>}
            <Grid container>
              <Grid item>
                <Link to="/Login">{"Already have an account? Sign in"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
