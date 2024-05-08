import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProducts: [],
  isLoading: true,
  selectedCategory: "All",
  listedCategories: [],
  categoryProducts: [],
  searchInput: "",
  idProduct: [],
  isError: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.isError = false;
      state.allProducts = action.payload;
      state.isLoading = false;
    },
    getCategories(state, action) {
      state.listedCategories = action.payload;
    },
    setCategory(state, action) {
      state.isError = false;
      state.isLoading = true;
      state.selectedCategory = action.payload;
    },
    getCategoryProducts(state, action) {
      state.searchInput = "";
      state.categoryProducts = action.payload;
      state.isLoading = false;
    },
    setProductId(state, action) {
      state.isError = false;
      state.isLoading = true;
      state.searchInput = action.payload;
    },
    getIdProduct(state, action) {
      state.idProduct.pop();
      state.idProduct.push(action.payload);
      state.isLoading = false;
    },
    setError(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  getProducts,
  getCategories,
  setCategory,
  getCategoryProducts,
  setProductId,
  getIdProduct,
  setError,
} = productSlice.actions;

export default productSlice.reducer;

export function fetchProducts() {
  return async function getProductsThunk(dispatch) {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      dispatch(getProducts(response.data.products));
    } catch (error) {
      dispatch(setError());
      console.error("Error fetching products:", error);
      throw error;
    }
  };
}

export function fetchCategories() {
  return async function getCategoriesThunk(dispatch) {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      dispatch(getCategories(response.data));
    } catch (error) {
      dispatch(setError());
      console.error("Error fetching categories:", error);
      throw error;
    }
  };
}

export function fetchCategoryProducts(category_name) {
  return async function getCategoryProductsThunk(dispatch) {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category_name}`
      );
      dispatch(getCategoryProducts(response.data.products));
    } catch (error) {
      dispatch(setError());
      console.error("Error fetching category products:", error);
      throw error;
    }
  };
}

export function fetchIdProducts(id) {
  return async function getIdProductsThunk(dispatch) {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      dispatch(getIdProduct(response.data));
    } catch (error) {
      dispatch(setError());
      console.error("Error fetching product:", error);
      throw error;
    }
  };
}
