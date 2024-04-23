import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCampers,
  fetchCamperById,
  addCamper,
  updateCamper,
  deleteCamper,
} from './operations';

const handleFulfilledCampers = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const handleFulfilledCamperById = (state, action) => {
  state.item = action.payload;
  state.isLoading = false;
};
const handleFulfilledAddCamper = (state, action) => {
  state.items.push(action.payload);
  state.isLoading = false;
};
const handleFulfilledUpdateCamper = (state, action) => {
  const payload = action.payload;
  if (payload && payload.id) {
    const index = state.items.findIndex(camper => camper?.id === payload.id);
    if (index !== -1) {
      state.items[index] = payload.body;
    }
  }
  state.isLoading = false;
};
const handleFulfilledDeleteCamper = (state, action) => {
  const index = state.items.findIndex(
    camper => camper.id === action.payload.id
  );
  state.items.splice(index, 1);
  state.isLoading = false;
};
const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    item: {},
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, handleFulfilledCampers)
      .addCase(fetchCamperById.fulfilled, handleFulfilledCamperById)
      .addCase(addCamper.fulfilled, handleFulfilledAddCamper)
      .addCase(updateCamper.fulfilled, handleFulfilledUpdateCamper)
      .addCase(deleteCamper.fulfilled, handleFulfilledDeleteCamper)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
