import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from ".";
import { getProducts as getProductsFromApi } from "../utils/api/GetProducts";
import { getFilterProductJewelry as getFilterJewelryFromApi } from "../utils/api/GetFilterProduct";
import { getFilterProductWomenClothing as getFilterWomenClothingFromApi } from "../utils/api/GetFilterProduct";
import { getFilterProductMenClothing as getFilterMenClothingFromApi } from "../utils/api/GetFilterProduct";
import { getFilterProductElectronics as getFilterElectronicsFromApi } from "../utils/api/GetFilterProduct";

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

export const fetchFilterJewelry: any = createAsyncThunk(
  "products/fetchFilter",
  async () => {
    const products = await getFilterJewelryFromApi();
    return products;
  }
);

export const fetchFilterMenClothing: any = createAsyncThunk(
  "products/fetchFilter",
  async () => {
    const products = await getFilterMenClothingFromApi();
    return products;
  }
);
export const fetchFilterWomenClothing: any = createAsyncThunk(
  "products/fetchFilter",
  async () => {
    const products = await getFilterWomenClothingFromApi();
    return products;
  }
);
export const fetchFilterElectronics: any = createAsyncThunk(
  "products/fetchFilter",
  async () => {
    const products = await getFilterElectronicsFromApi();
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
    [fetchFilterJewelry.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = "succeded";
    },
    [fetchFilterMenClothing.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = "succeded";
    },
    [fetchFilterWomenClothing.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = "succeded";
    },
    [fetchFilterElectronics.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = "succeded";
    },
  },
});

export const selectProducts = (state: AppState) => state.allProducts.products;

export default productSlice.reducer;
