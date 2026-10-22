import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const first = Number(action.payload.first);
      const second = Number(action.payload.second);
      state.result = first + second;
    },
    sub: (state, action) => {
      const first = Number(action.payload.first);
      const second = Number(action.payload.second);
      state.result = first - second;
    },
    mult: (state, action) => {
      const first = Number(action.payload.first);
      const second = Number(action.payload.second);
      state.result = first * second;
    },
    divi: (state, action) => {
      const first = Number(action.payload.first);
      const second = Number(action.payload.second);

      if (!Number.isFinite(second) || second === 0) {
        state.result = "Division by zero or an invalid number is not possible.";
        return;
      }

      state.result = first / second;
    },
    reset: (state) => {
      state.result = null;
    },
  },
});

export const { add, sub, mult, divi, reset } = calcSlice.actions;
export default calcSlice.reducer;
