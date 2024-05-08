import { useEffect } from "react";
import ProductCard from "./Card";
import { Box, CircularProgress } from "@mui/material";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

import ErrorIcon from "@mui/icons-material/Error";

const Products = () => {
  const {
    allProducts,
    isLoading,
    selectedCategory,
    categoryProducts,
    searchInput,
    idProduct,
    isError,
  } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center,",
          alignItems: "center",
          gap: "10px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress color="inherit" />
        <p>Fetching Products...</p>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center,",
          alignItems: "center",
          gap: "10px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ErrorIcon color="inherit" />
        <p>Oops Something Wrong! Try again</p>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {searchInput.length > 0
        ? idProduct.map((product) => (
            <ProductCard
              key={product.id}
              imgage={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
            />
          ))
        : selectedCategory === "All"
        ? allProducts.map((product) => (
            <ProductCard
              key={product.id}
              imgage={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
            />
          ))
        : categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              imgage={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
            />
          ))}
    </Box>
  );
};

export default Products;
