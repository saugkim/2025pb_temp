import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goalsInfo: []
};

const goalsSlice = createSlice({
  name: '_goals',
  initialState,
  reducers: {
    setGoalsState: (state, action) => {
      state.goalsInfo = action.payload;
    },
    resetGoalsState: (state) => {
      state.goalsInfo = []
    }
  },
});

export const { setGoalsState, resetGoalsState } = goalsSlice.actions;

export default goalsSlice.reducer;

export const selectGoalsInfo = (state) => state._goals.goalsInfo;
