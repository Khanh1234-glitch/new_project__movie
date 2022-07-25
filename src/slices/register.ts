import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { currentUser } from "../interface/auth";
import { RegisterValues } from "../interface/registerValues";
import authAPI from "../services/authAPI";

interface AuthState {
  currentUser: currentUser;
  isLoading: boolean;
  error?: string;
}

const initialState: AuthState = {
  currentUser: {} as currentUser,
  isLoading: false,
  error: "",
};

export const createRegister = createAsyncThunk("register/register", async (values: RegisterValues) => {
  try {
    const data = await authAPI.register(values);
    // Lưu thông tin đăng nhập vào localStorage
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
});

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createRegister.pending, (state) => {
      return { ...state, isLoading: true};
    });
    builder.addCase(createRegister.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, currentUser: payload };
    });
    builder.addCase(createRegister.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message };
    });
  },
});
export default registerSlice.reducer;