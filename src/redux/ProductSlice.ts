import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from ".";
import { getProducts as getProductsFromApi } from "../utils/api/GetProducts";

const initialState: Products = {
  products: [],
  status: null,
};

interface Products {
  products: ProductsInfo[];
  status: string | null;
}

interface ProductsInfo {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProductsFromApi();
    return products;
  }
);

export const productSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = "succeded";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectProducts = (state: AppState) => state.allProducts.products;

export default productSlice.reducer;
