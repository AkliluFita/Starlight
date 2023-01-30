import {
  Alert,
  Box,

  // IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import contactUsImg from "../images/contactUs2.jpg";

function ContactUs() {
  const formRef = useRef();
  const [submit, setSubmit] = useState("Submit");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Thanks, you have successfully Submitted");
          setSubmit("Submitted");
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      );
  };

  // input style
  const inputStyle = {
    width: "100%",
    height: "60px",
    padding: "20px",
    border: "none",
    borderRadius: "10px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        width: "100%",
        // marginTop: "120px",
        flexWrap: "wrap",
        border: "1px solid black",
      }}
    >
      <img
        src={contactUsImg}
        alt=""
        style={{
          flex: 1,
          borderRadius: "50%",
          height: "50%",
          width: "50%",
          marginTop: "80px",
        }}
      />
      <Stack
        spacing={3}
        sx={{
          flex: 2,
          marginTop: "140px",
          // border: "1px solid black",
          padding: "20px",
          width: "100%",
          color: "blue",
          backgroundColor: "#E1E9E8",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", fontFamily: "Georgia" }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", fontFamily: "Georgia", color: "blue" }}
        >
          get any information you need to know about us
        </Typography>
        <form
          style={{
            width: "100%",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: 15,
            alignItems: "center",
          }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="user_name"
            placeholder="name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="user_email"
            placeholder="email"
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="user_subject"
            placeholder="subject"
            required
            style={inputStyle}
          />
          <textarea
            cols="10"
            rows="10"
            name="message"
            placeholder="message"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
            }}
          />
          <button
            disabled={submit === "Submitted"}
            style={{
              width: "300px",
              height: "40px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              "&:hover": {
                background: "blue",
              },
            }}
          >
            {submit}
          </button>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
        </form>
      </Stack>
    </Box>
  );
}

export default ContactUs;
