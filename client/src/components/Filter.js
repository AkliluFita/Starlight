import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
} from "@mui/material";
import React from "react";

function Filter() {
  const MyBox = styled(Box)(({ theme }) => ({
    marginTop: "180px",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    padding: "30px",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const MySelectBox = styled(Box)(({ theme }) => ({
    minWidth: "220px",
  }));

  return (
    <MyBox>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ alignItems: "center" }}
      >
        <MySelectBox>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={imgCategory}
              label="imgCategory"
              //   onChange={handleChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="well-known">Dell</MenuItem>
              <MenuItem value="interview">HP</MenuItem>
              <MenuItem value="events">Lenovo</MenuItem>
              <MenuItem value="gallery"></MenuItem>
            </Select>
          </FormControl>
        </MySelectBox>
      </Stack>
    </MyBox>
  );
}

export default Filter;
