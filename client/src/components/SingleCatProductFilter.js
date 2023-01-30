import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

function SingleCatProductFilter({ products, newProducts, setNewProducts }) {
  const [sortPrice, setSortPrice] = React.useState(null);

  const handleCheckChange = (event) => {
    const index = newProducts.indexOf(event.target.value);
    if (index === -1) {
      setNewProducts([...newProducts, event.target.value]);
    } else {
      setNewProducts(newProducts.filter((item) => item !== event.target.value));
    }
  };

  // handle sort price change
  const handlePriceSortChange = (event) => {
    setSortPrice(event.target.value);
    console.log(sortPrice);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel component="legend">Filter By Product Type</FormLabel>
        <FormGroup>
          {products.map((product) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    value={product.attributes.proTypes}
                    checked={newProducts.includes(product.attributes.proTypes)}
                    onChange={handleCheckChange}
                  />
                }
                label={product.attributes.proTypes}
              />
            );
          })}

          <FormControlLabel
            control={
              <Checkbox
                value="OtherProduct"
                checked={newProducts.includes("OtherProduct")}
                onChange={handleCheckChange}
              />
            }
            // name="OtherProduct"
            label="OtherProduct"
          />
        </FormGroup>
      </FormControl>
      <Stack sx={{ marginTop: "20px" }}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Sorted Price BY
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={sortPrice}
            onChange={handlePriceSortChange}
          >
            <FormControlLabel
              value="hightest"
              control={<Radio />}
              label="hightest"
            />
            <FormControlLabel
              value="lowest"
              control={<Radio />}
              label="lowest"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default SingleCatProductFilter;
