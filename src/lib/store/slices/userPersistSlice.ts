import { createSlice } from "@reduxjs/toolkit";

type UserPersistState = {
  theme: "light" | "dark";
  lastLoginName: string | null;
};

const initialState: UserPersistState = {
  theme: "light",
  lastLoginName: null,
};

const userPersistSlice = createSlice({
  name: "userPersist",
  initialState,
  reducers: {
    setTheme(state, action: { payload: "light" | "dark" }) {
      state.theme = action.payload;
    },
    setLastLoginName(state, action: { payload: string | null }) {
      state.lastLoginName = action.payload;
    },
    clearPersist(state) {
      state.theme = "light";
      state.lastLoginName = null;
    },
  },
});

export const { setTheme, setLastLoginName, clearPersist } =
  userPersistSlice.actions;

export default userPersistSlice.reducer;
