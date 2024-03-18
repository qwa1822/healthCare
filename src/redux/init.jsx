import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 0,
    image: "",
    description: "",
  },
];

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    checked(state, action) {
      const { payload } = action;
      const { id } = payload;

      const findIndex = state.find(item => item.id == id);
      if (!findIndex) {
        state.push(payload);
      } else {
        alert("이미존재합니다");
      }
    },
  },
});

export const { checked } = counterSlice.actions;
export default counterSlice;
