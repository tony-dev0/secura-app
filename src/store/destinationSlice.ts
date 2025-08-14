import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LatLng {
  lat: number;
  lng: number;
}

const initialState: LatLng = {
  lat: 0,
  lng: 0,
};

const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    setDestination(state: LatLng, action: PayloadAction<LatLng>) {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { setDestination } = destinationSlice.actions;
export default destinationSlice.reducer;
