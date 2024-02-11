import { createSlice } from "@reduxjs/toolkit";
import { generateRandomColor } from "Utils/UtilsFuncs";

const user = {
  id: "",
  firstName: "",
  lastName: "",
  emailAddress: "",
  profilePhoto: "",
  themeMode: "light",
  themeColor: generateRandomColor(),
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: user,
  },
  reducers: {
    addUserId: (state, action) => {
      state.value = {
        ...state.value,
        id: action.payload,
      };
    },
    addFirstName: (state, action) => {
      state.value = {
        ...state.value,
        firstName: action.payload,
      };
    },
    addEmailAddress: (state, action) => {
      state.value = {
        ...state.value,
        emailAddress: action.payload,
      };
    },
    addLastName: (state, action) => {
      state.value = {
        ...state.value,
        lastName: action.payload,
      };
    },
    addThemeMode: (state, action) => {
      state.value = {
        ...state.value,
        themeMode: action.payload,
      };
    },
    addProfilePhoto: (state, action) => {
      state.value = {
        ...state.value,
        profilePhoto: action.payload,
      };
    },
  },
});
export const {
  addUserId,
  addThemeMode,
  addLastName,
  addEmailAddress,
  addProfilePhoto,
  addFirstName,
} = userSlice.actions;
export default userSlice.reducer;
