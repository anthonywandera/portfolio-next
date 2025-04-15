import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: { isAuth: false },
  reducers: {
    authenticate(prevState) {
      prevState.isAuth = true;
    },
  },
});

export const authReducer = auth.reducer;
export const authActions = auth.actions;
