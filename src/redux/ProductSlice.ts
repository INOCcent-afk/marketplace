import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from ".";
import { getProducts as getProductsFromApi } from "../utils/api/GetProducts";
import { getFilterProductJewelry as getFilterJewelryFromApi } from "../utils/api/GetFilterProduct";
import { getFilterProductElectronics as getFilterElectronicsFromApi } from "../utils/api/GetFilterProduct";

const initialState: Products = {
  products: [],
  cart: [],
  status: null,
};

interface Products {
  products: ProductsInfo[];
  cart: CartItemInfo[];
  status: string | null;
}

interface ProductsInfo {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image?: string;
}
interface CartItemInfo {
  id: number;
  title: string;
  price: number;
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
  reducers: {
    removeCartItem: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },
    addCartItem: (state, action: PayloadAction<CartItemInfo>) => {
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: Math.floor(Math.random() * 999),
            price: action.payload.price,
            title: action.payload.title,
          },
        ],
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cart: [],
      };
    },
  },
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
    [fetchFilterElectronics.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = "succeded";
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = productSlice.actions;

export const selectProducts = (state: AppState) => state.allProducts.products;

export const selectCart = (state: AppState) => state.allProducts.cart;

export default productSlice.reducer;
