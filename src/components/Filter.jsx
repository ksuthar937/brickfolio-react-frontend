import { Box, Chip, Stack, Typography } from "@mui/material";

import { useEffect } from "react";
import {
  fetchCategories,
  fetchCategoryProducts,
  setCategory,
} from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const { listedCategories, selectedCategory } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategory = (category) => {
    dispatch(setCategory(category));
    dispatch(fetchCategoryProducts(category));
  };

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography gutterBottom variant="body2">
        Select Category
      </Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        <Chip
          sx={{
            "&:hover": {
              color: "white",
              backgroundColor: "#B7B7B7",
              cursor: "pointer",
            },
          }}
          color={selectedCategory === "All" ? "primary" : "default"}
          label="All"
          size="small"
          onClick={() => handleCategory("All")}
        />
        {listedCategories.map((category, index) => {
          return (
            <Chip
              key={index}
              label={category}
              size="small"
              color={selectedCategory === category ? "primary" : "default"}
              sx={{
                "&:hover": {
                  color: "white",
                  backgroundColor: "#B7B7B7",
                  cursor: "pointer",
                },
              }}
              component="button"
              onClick={() => handleCategory(category)}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Filter;
